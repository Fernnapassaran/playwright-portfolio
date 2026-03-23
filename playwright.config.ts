import { defineConfig, devices } from "@playwright/test";
import { on } from "node:cluster";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

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
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    launchOptions: {
      /* setting full screen */ args: ["--start-maximized"],
    },

    viewport: { width: 1280, height: 720 }, //set null because it doesn't fix size screen

    trace: "on-first-retry", //
    screenshot: "on", //take a screenshort every time a test finishes
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
        //Configure all tests in this project to use the stored login state
        storageState: "playwright/.auth/user.json",
      },
      // Ensure the 'setup' project completes before running this project
      dependencies: ["setup"],
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        //Configure all tests in this project to use the stored login state
        storageState: "playwright/.auth/user.json",
      },
      // Ensure the 'setup' project completes before running this project
      dependencies: ["setup"],
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        //Configure all tests in this project to use the stored login state
        storageState: "playwright/.auth/user.json",
      },
      // Ensure the 'setup' project completes before running this project
      dependencies: ["setup"],
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
