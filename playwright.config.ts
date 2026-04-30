import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html"],
    ["allure-playwright", { outputFolder: "allure-results" }],
  ],
  /* Shared settings for all the projects below. */
  use: {
    /* Collect trace when retrying the failed test. */
    trace: "on-first-retry",
    /* Take a screenshot every time a test finishes */
    screenshot: "on",
    baseURL: "https://www.saucedemo.com", // ตั้งค่า URL หลักไว้ที่นี่
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        /* Configure all tests in this project to use the stored login state */
        storageState: "playwright/.auth/user.json",
        /* Set viewport to null to allow full screen resizing */
        viewport: null,
        /* Reset deviceScaleFactor to prevent conflict with null viewport */
        deviceScaleFactor: undefined,
      },
      /* Ensure the 'setup' project completes before running this project */
      dependencies: ["setup"],
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },

    {
      name: "mobile-safari",
      use: {
        ...devices["iPhone 13"],
        isMobile: true,
        hasTouch: true,
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },
    {
      name: "mobile-android",
      use: {
        ...devices["Pixel 5"],
        isMobile: true,
        hasTouch: true,
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],
});
