import { test, expect } from "@playwright/test";

test.describe("Security headers", () => {
  test("homepage sends all expected security headers", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();

    expect(headers["strict-transport-security"]).toContain("max-age=63072000");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("SAMEORIGIN");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toContain("camera=()");
    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'self'");
  });

  test("CSP allows Google Maps frames", async ({ request }) => {
    const response = await request.get("/contact");
    const csp = response.headers()["content-security-policy"];
    expect(csp).toContain("maps.google.com");
  });

  test("CSP allows Google Fonts", async ({ request }) => {
    const response = await request.get("/");
    const csp = response.headers()["content-security-policy"];
    expect(csp).toContain("fonts.googleapis.com");
    expect(csp).toContain("fonts.gstatic.com");
  });
});

test.describe("API rate limiting and validation", () => {
  // Origin check runs before validation, so we need to set correct origin
  function originHeaders(baseURL: string | undefined) {
    const origin = baseURL?.replace(/\/$/, "") || "http://localhost:3000";
    return {
      "Content-Type": "application/json",
      origin,
      referer: `${origin}/contact`,
    };
  }

  test("contact API rejects request with missing fields", async ({ request, baseURL }) => {
    const response = await request.post("/api/contact", {
      data: {},
      headers: originHeaders(baseURL),
    });
    // 400 = validation error, 429 = rate limited (both acceptable, never 200)
    expect([400, 429]).toContain(response.status());
  });

  test("contact API rejects invalid email", async ({ request, baseURL }) => {
    const response = await request.post("/api/contact", {
      data: {
        voornaam: "Test",
        achternaam: "User",
        email: "not-an-email",
        vraag: "hi",
      },
      headers: originHeaders(baseURL),
    });
    expect([400, 429]).toContain(response.status());
  });

  test("afspraak API requires bevestiging Ja or Nee", async ({ request, baseURL }) => {
    const response = await request.post("/api/afspraak", {
      data: {
        voornaam: "Test",
        achternaam: "User",
        email: "test@example.com",
        telefoon: "0612345678",
        bevestiging: "Misschien",
      },
      headers: originHeaders(baseURL),
    });
    expect([400, 429]).toContain(response.status());
  });
});
