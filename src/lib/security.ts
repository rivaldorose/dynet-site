// HTML escape om XSS in email templates te voorkomen
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Rate limiting: simpele in-memory per-IP counter
// Werkt per serverless instance, genoeg om basic bot-floods te stoppen
const WINDOW_MS = 60 * 60 * 1000; // 1 uur
const MAX_REQUESTS = 5; // max 5 per uur per IP

const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

// Honeypot check: als het verborgen veld is ingevuld, is het een bot
export function isHoneypotFilled(data: Record<string, unknown>): boolean {
  const website = data.website;
  return typeof website === "string" && website.trim().length > 0;
}
