import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests/e2e",
  forbidOnly: !!process.env.CI,
  workers: 1,
  reporter: "list",
  use: {
    baseURL,
    headless: true,
    viewport: { width: 1440, height: 900 },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
  webServer: {
    // Reuse the completed build, never a development server with database access.
    command: "npm run start -- --hostname 127.0.0.1 --port 3100",
    url: `${baseURL}/how-capsight-works`,
    reuseExistingServer: false,
    env: { DATABASE_URL: "", NEXT_TELEMETRY_DISABLED: "1" },
  },
});
