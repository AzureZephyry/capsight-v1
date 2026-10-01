import { expect, test } from "@playwright/test";

// Each Playwright test starts with a fresh browser context and no saved preference.
test.use({ colorScheme: "dark", reducedMotion: "reduce" });

test("Light is the default without a preference even when the browser prefers Dark", async ({
  page,
}) => {
  await page.goto("/how-capsight-works");
  await expect(
    page.getByRole("button", { name: "Switch to dark theme" }),
  ).toHaveAttribute("aria-pressed", "false");
});

test("explicit Dark and Light choices survive reload and product navigation", async ({
  page,
}) => {
  await page.goto("/how-capsight-works");
  const canvas = page.locator("body");
  const lightBackground = await canvas.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(canvas).not.toHaveCSS("background-color", lightBackground);
  const darkBackground = await canvas.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(canvas).toHaveCSS("background-color", darkBackground);
  await page
    .getByRole("navigation", { name: "CapSight", exact: true })
    .getByRole("link", { name: "Workspace", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { level: 1, name: /Shared Workspace/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(canvas).toHaveCSS("background-color", darkBackground);
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(
    page.getByRole("button", { name: "Switch to dark theme" }),
  ).toHaveAttribute("aria-pressed", "false");
  await expect(canvas).toHaveCSS("background-color", lightBackground);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to dark theme" }),
  ).toHaveAttribute("aria-pressed", "false");
  await expect(canvas).toHaveCSS("background-color", lightBackground);
  await page
    .getByRole("navigation", { name: "CapSight", exact: true })
    .getByRole("link", { name: "How CapSight Works" })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Every decision,\s*connected\./,
  );
  await expect(
    page.getByRole("button", { name: "Switch to dark theme" }),
  ).toHaveAttribute("aria-pressed", "false");
  await expect(canvas).toHaveCSS("background-color", lightBackground);
});
