import { defineConfig, devices } from "@playwright/test";

// Tests kunnen lokaal draaien tegen `npm run dev` of tegen productie
// Set PLAYWRIGHT_BASE_URL=https://www.dynet.nl om tegen live te testen
const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";
const isProduction = baseURL.startsWith("https://www.dynet.nl");

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 13"] },
    },
  ],

  // Start dev server automatisch bij lokale tests
  webServer: isProduction
    ? undefined
    : {
        command: "npm run dev",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
