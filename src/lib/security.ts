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

// Origin check: alleen POST requests vanaf onze eigen site toestaan
const ALLOWED_ORIGINS = [
  "https://www.dynet.nl",
  "https://dynet.nl",
  "https://dynet-site.vercel.app",
  "http://localhost:3000",
];

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  // In development of vanaf Vercel preview
  if (process.env.NODE_ENV !== "production") return true;

  // Vercel preview deploys zijn toegestaan
  if (origin?.endsWith(".vercel.app")) return true;
  if (referer?.includes(".vercel.app")) return true;

  if (origin && ALLOWED_ORIGINS.includes(origin)) return true;
  if (referer && ALLOWED_ORIGINS.some((o) => referer.startsWith(o))) return true;

  return false;
}

// Server-side validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{6,20}$/;

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && email.length <= 254 && EMAIL_REGEX.test(email);
}

export function isValidPhone(phone: unknown): phone is string {
  return typeof phone === "string" && PHONE_REGEX.test(phone);
}

export function isValidText(value: unknown, maxLength = 500): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= maxLength;
}

export function isValidLongText(value: unknown, maxLength = 5000): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= maxLength;
}
