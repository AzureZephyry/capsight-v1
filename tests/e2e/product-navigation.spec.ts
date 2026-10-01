import { expect, test } from "@playwright/test";

test("opening CapSight reaches Shared Workspace with safe unavailable work and product navigation", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/assessments$/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Shared Workspace/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Saved work is temporarily unavailable",
    }),
  ).toBeVisible();
  const unavailable = page.getByRole("region", {
    name: "Saved work is temporarily unavailable",
  });
  await expect(unavailable.getByRole("alert")).toContainText(/couldn’t load/i);
  await expect(unavailable).not.toContainText(
    /DATABASE_URL|Prisma|node_modules|stack trace|postgres(?:ql)?:\/\//i,
  );
  await expect(page.getByRole("button", { name: "Try again" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Create Assessment" }),
  ).toHaveCount(0);

  const navigation = page.getByRole("navigation", {
    name: "CapSight",
    exact: true,
  });
  await expect(
    navigation.getByRole("link", { name: "Workspace", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await navigation.getByRole("link", { name: "How CapSight Works" }).click();
  await expect(page).toHaveURL(/\/how-capsight-works$/);
  await expect(
    navigation.getByRole("link", { name: "How CapSight Works" }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Every decision,\s*connected\./,
  );
  await navigation
    .getByRole("link", { name: "Workspace", exact: true })
    .click();
  await expect(page).toHaveURL(/\/assessments$/);
});

test("How CapSight Works connects all loop steps and identifies capabilities as planned", async ({
  page,
}) => {
  const response = await page.goto("/how-capsight-works");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Every decision,\s*connected\./,
  );
  const loop = page.getByRole("region", { name: "One connected process." });

  for (const step of [
    "Calculate",
    "Explain",
    "Simulate",
    "Compare",
    "Validate",
    "Adjust",
  ]) {
    const control = loop.getByRole("button", { name: new RegExp(`${step}$`) });
    await control.click();
    await expect(control).toHaveAttribute("aria-pressed", "true");
    await expect(loop.getByText(`${step} · Designed capability`)).toBeVisible();
  }
  await expect(loop.getByText(/These capabilities are planned/)).toBeVisible();
  await page.getByRole("link", { name: "Explore the capabilities" }).click();
  await expect(page).toHaveURL(/#capabilities$/);
  const capabilities = page.getByRole("region", {
    name: "More than a final number.",
  });
  await expect(
    capabilities.getByRole("heading", { level: 2 }),
  ).toBeInViewport();
  for (const name of ["Decision Trace", "Scenario Studio", "Reality Loop"]) {
    const feature = capabilities.getByRole("article").filter({
      has: page.getByRole("heading", { name, exact: true }),
    });
    await expect(
      feature.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    await expect(feature.getByText(/^Planned ·/)).toBeVisible();
  }
});

test("an unknown route offers branded recovery without visible technical details", async ({
  page,
}) => {
  const response = await page.goto("/this-route-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Page not found" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "CapSight workspace", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("main")).not.toContainText(
    /DATABASE_URL|Prisma|node_modules|stack trace|TypeError|Error:|postgres(?:ql)?:\/\//i,
  );
  await page.getByRole("link", { name: "Back to Workspace" }).click();
  await expect(page).toHaveURL(/\/assessments$/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Shared Workspace/ }),
  ).toBeVisible();
});

test("keyboard users can skip to content, switch theme, and follow product navigation", async ({
  page,
}) => {
  await page.goto("/how-capsight-works");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await expect(skip).toHaveCSS(
    "outline-style",
    /^(solid|dashed|dotted|double)$/,
  );
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();

  await page.keyboard.press("Shift+Tab");
  const theme = page.getByRole("button", { name: "Switch to dark theme" });
  await expect(theme).toBeFocused();
  await expect(theme).toHaveCSS("outline-width", /[1-9]\d*(\.\d+)?px/);
  await page.keyboard.press("Space");
  await expect(
    page.getByRole("button", { name: "Switch to light theme" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Shift+Tab");
  await expect(
    page
      .getByRole("navigation", { name: "CapSight", exact: true })
      .getByRole("link", { name: "How CapSight Works" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  const workspace = page
    .getByRole("navigation", { name: "CapSight", exact: true })
    .getByRole("link", { name: "Workspace", exact: true });
  await expect(workspace).toBeFocused();
  await expect(workspace).toHaveCSS("outline-width", /[1-9]\d*(\.\d+)?px/);
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/assessments$/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Shared Workspace/ }),
  ).toBeVisible();
});
