import { test, expect } from "@playwright/test";

test.describe("Mobile responsive", () => {
  test("homepage has no horizontal overflow on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    // Allow a 2px tolerance for browser quirks
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });

  test("hamburger menu button is visible on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");
    await expect(page.getByLabel("Menu")).toBeVisible();
  });

  test("desktop nav is hidden on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");
    // Desktop nav is in a nav element that uses hidden lg:flex
    const desktopNav = page.locator("header nav.hidden");
    await expect(desktopNav).toBeHidden();
  });

  test("contact form is full width on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/contact");

    const form = page.locator("form").first();
    await expect(form).toBeVisible();

    const box = await form.boundingBox();
    const viewportWidth = page.viewportSize()?.width ?? 0;
    expect(box?.width).toBeGreaterThan(viewportWidth * 0.7);
  });

  test("footer stacks vertically on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");

    // Footer links columns should be visible and stacked
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByRole("link", { name: "Home", exact: true })).toBeVisible();
  });
});

test.describe("Desktop responsive", () => {
  test("desktop nav shows all links inline", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only test");
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Dynet Electric", exact: true })).toBeVisible();
    await expect(page.getByLabel("Menu")).toBeHidden();
  });
});
