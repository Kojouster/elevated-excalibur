import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type GateState = "checking" | "allowed" | "blocked";

const BlockGate = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<GateState>("checking");
  const [reason, setReason] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        // The decision is made server-side from the real connection IP.
        // The browser never determines the country itself.
        const { data, error } = await supabase.functions.invoke("geo-gate", {
          body: {},
        });
        if (cancelled) return;
        if (error) throw error;

        if (data?.decision === "blocked") {
          setReason(
            data.reason === "proxy"
              ? "Access via VPN, proxy, or anonymizer networks is not permitted."
              : "Access from your region is not permitted.",
          );
          setState("blocked");
          return;
        }
        setState("allowed");
      } catch {
        // Server check unavailable: allow browsing of this public marketing site.
        if (!cancelled) setState("allowed");
      }
    };

    check();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="animate-pulse text-sm text-muted-foreground">Loading…</div>
      </div>
    );
  }

  if (state === "blocked") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-semibold">Access Restricted</h1>
          <p className="text-muted-foreground">{reason}</p>
          <p className="text-xs text-muted-foreground">
            If you believe this is an error, please disable any VPN or proxy and try again.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default BlockGate;
