import { test, expect } from "@playwright/test";

test.describe("Header navigation", () => {
  test("header shows all nav links on desktop", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only test");
    await page.goto("/");
    const header = page.locator("header");

    for (const label of ["Home", "Over ons", "Duurzaamheid", "Diensten", "Projecten", "Dynet Electric", "Contact"]) {
      await expect(header.getByRole("link", { name: label, exact: true }).first()).toBeVisible();
    }
  });

  test("logo links to homepage", async ({ page }) => {
    await page.goto("/contact");
    await page.getByAltText("Dynet Infratechniek").first().click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("contact icon buttons in header have correct links", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only test");
    await page.goto("/");
    await expect(page.getByLabel("Bel ons")).toHaveAttribute("href", "tel:0852224002");
    await expect(page.getByLabel("Email ons")).toHaveAttribute("href", "mailto:info@dynet.nl");
  });

  test("mobile menu opens and shows links", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");
    await page.getByLabel("Menu").click();
    const header = page.locator("header");
    for (const label of ["Home", "Contact", "Dynet Electric"]) {
      await expect(header.getByRole("link", { name: label, exact: true }).first()).toBeVisible();
    }
  });
});

test.describe("Footer navigation", () => {
  test("footer has all expected links", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");

    for (const label of ["Home", "Over ons", "Duurzaamheid", "Diensten", "Projecten", "Contact", "Afspraak maken"]) {
      await expect(footer.getByRole("link", { name: label, exact: true }).first()).toBeVisible();
    }
  });

  test("footer shows contact info", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");

    await expect(footer).toContainText("Keurmeesterstraat 53");
    await expect(footer).toContainText("085-2224002");
    await expect(footer).toContainText("info@dynet.nl");
  });

  test("footer social media links are present", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");

    await expect(footer.getByLabel("LinkedIn")).toBeVisible();
    await expect(footer.getByLabel("Facebook")).toBeVisible();
    await expect(footer.getByLabel("WhatsApp")).toBeVisible();
  });
});
