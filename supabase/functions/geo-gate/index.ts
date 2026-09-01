const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BLOCKED_COUNTRIES = ["RU"];

function clientIp(req: Request): string | null {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    // Country hints provided by the edge/CDN layer, based on the real connection IP.
    const headerCountry =
      req.headers.get("cf-ipcountry") ??
      req.headers.get("x-vercel-ip-country") ??
      null;

    let country = headerCountry?.toUpperCase() ?? null;
    let isProxy = false;

    if (!country || country === "XX" || country === "T1") {
      const ip = clientIp(req);
      if (ip) {
        try {
          const res = await fetch(`https://ipapi.co/${ip}/json/`, {
            headers: { "User-Agent": "palvan-geo-gate" },
          });
          if (res.ok) {
            const data = await res.json();
            if (typeof data?.country_code === "string") {
              country = data.country_code.toUpperCase();
            }
            isProxy = Boolean(data?.proxy || data?.hosting || data?.vpn || data?.tor);
          }
        } catch (_e) {
          // Lookup failure is handled below via the "unknown" decision.
        }
      }
    }

    if (country && BLOCKED_COUNTRIES.includes(country)) {
      return json({ decision: "blocked", reason: "region" });
    }
    if (isProxy) {
      return json({ decision: "blocked", reason: "proxy" });
    }
    if (!country) {
      // Could not determine origin server-side.
      return json({ decision: "unknown" });
    }
    return json({ decision: "allowed" });
  } catch (_err) {
    console.error("geo-gate: unexpected failure");
    return json({ decision: "unknown" }, 200);
  }
});
