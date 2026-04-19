import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", title: /Dynet Infratechniek/i, heading: "DYNET INFRATECHNIEK" },
  { path: "/dynet-electric", title: /Dynet Electric/i, heading: "DYNET ELECTRIC" },
  { path: "/contact", title: /Contact/i, heading: "Contact" },
  { path: "/projecten", title: /Projecten/i, heading: "Projecten" },
  { path: "/prijsvergelijker", title: /Prijsvergelijker/i, heading: "Prijsvergelijker" },
  { path: "/afspraak-maken", title: /Afspraak maken/i, heading: "Afspraak maken" },
  { path: "/naw-gegevens", title: /NAW/i, heading: /NAW-gegevens/i },
  { path: "/bedankt", title: /Bedankt/i, heading: "Bedankt" },
  { path: "/bedankt-contact", title: /Bedankt/i, heading: /Bedankt/i },
  { path: "/bedankt-voor-uw-gegevens", title: /Bedankt/i, heading: "Bedankt" },
];

for (const { path, title, heading } of pages) {
  test(`page ${path} loads with correct title and heading`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(title);
    await expect(page.locator("h1, h2").first()).toContainText(heading);
  });
}

test("404 page works for unknown routes", async ({ page }) => {
  const response = await page.goto("/this-does-not-exist");
  expect(response?.status()).toBe(404);
});
