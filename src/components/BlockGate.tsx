import { useEffect, useState } from "react";

const BLOCKED_COUNTRIES = ["RU"];

type GateState = "checking" | "allowed" | "blocked";

const BlockGate = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<GateState>("checking");
  const [reason, setReason] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        // ipapi.co returns country_code plus proxy/vpn hints on some plans.
        // We use it as a best-effort client-side signal.
        const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
        if (!res.ok) throw new Error("geo lookup failed");
        const data = await res.json();
        if (cancelled) return;

        const country: string | undefined = data.country_code;
        // Some responses include these fields; treat as soft signals.
        const isProxy = Boolean(data.proxy || data.hosting || data.vpn || data.tor);

        if (country && BLOCKED_COUNTRIES.includes(country)) {
          setReason("Access from your region is not permitted.");
          setState("blocked");
          return;
        }
        if (isProxy) {
          setReason("Access via VPN, proxy, or anonymizer networks is not permitted.");
          setState("blocked");
          return;
        }
        setState("allowed");
      } catch {
        // On lookup failure, fail open so legitimate users are not blocked.
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
