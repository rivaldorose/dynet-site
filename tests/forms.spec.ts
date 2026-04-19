import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("renders all required fields", async ({ page }) => {
    await expect(page.getByLabel("Bedrijfsnaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Voornaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Achternaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Telefoonnummer", { exact: false })).toBeVisible();
    await expect(page.getByLabel("E-mailadres", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Uw vraag", { exact: false })).toBeVisible();
    await expect(page.getByRole("button", { name: "Verzenden" })).toBeVisible();
  });

  test("has honeypot field positioned off-screen", async ({ page }) => {
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toBeAttached();
    // Off-screen positioned so real users don't see it
    await expect(honeypot).toHaveCSS("position", "absolute");
  });

  test("shows checkbox options", async ({ page }) => {
    for (const option of ["Facturatie", "Projecten", "Bezoek plannen"]) {
      await expect(page.getByLabel(option)).toBeVisible();
    }
  });

  test("required fields block submit when empty", async ({ page }) => {
    await page.getByRole("button", { name: "Verzenden" }).click();
    // Browser validation should prevent navigation
    await expect(page).toHaveURL(/\/contact/);
  });

  test("invalid email is rejected by browser validation", async ({ page }) => {
    await page.getByLabel("Voornaam", { exact: false }).fill("Test");
    await page.getByLabel("Achternaam", { exact: false }).fill("User");
    await page.getByLabel("Telefoonnummer", { exact: false }).fill("0612345678");
    await page.getByLabel("E-mailadres", { exact: false }).fill("not-an-email");
    await page.getByLabel("Uw vraag", { exact: false }).fill("Test vraag");
    await page.getByRole("button", { name: "Verzenden" }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Afspraak maken form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/afspraak-maken");
  });

  test("renders all required fields", async ({ page }) => {
    await expect(page.getByLabel("Eigenaar of huurder")).toBeVisible();
    await expect(page.getByLabel("Voornaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Achternaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Straatnaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Postcode", { exact: false })).toBeVisible();
  });

  test("has Ja/Nee confirmation radio buttons", async ({ page }) => {
    await expect(page.getByRole("radio", { name: "Ja" })).toBeVisible();
    await expect(page.getByRole("radio", { name: "Nee" })).toBeVisible();
  });

  test("has honeypot field positioned off-screen", async ({ page }) => {
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toBeAttached();
    await expect(honeypot).toHaveCSS("position", "absolute");
  });
});

test.describe("NAW gegevens form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/naw-gegevens");
  });

  test("renders all required fields", async ({ page }) => {
    await expect(page.getByLabel("U bent", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Voornaam", { exact: false })).toBeVisible();
    await expect(page.getByLabel("Straatnaam", { exact: false })).toBeVisible();
  });

  test("has honeypot field positioned off-screen", async ({ page }) => {
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toBeAttached();
    await expect(honeypot).toHaveCSS("position", "absolute");
  });
});

test.describe("API endpoints reject bad origin", () => {
  test("POST /api/contact without origin returns 403 in production", async ({ request, baseURL }) => {
    // Only meaningful in production where origin check is enforced
    test.skip(!baseURL?.startsWith("https://"), "Production-only test");

    const response = await request.post("/api/contact", {
      data: { voornaam: "Test", achternaam: "User", email: "test@example.com", vraag: "hi" },
      headers: { "Content-Type": "application/json", origin: "https://evil.example" },
    });
    expect(response.status()).toBe(403);
  });
});
