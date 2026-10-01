import { expect, test } from "@playwright/test";

for (const viewport of [
  { width: 320, height: 800 },
  { width: 1440, height: 900 },
]) {
  test(`product pages and navigation remain usable at ${viewport.width}px without document overflow`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/how-capsight-works");
    const navigation = page.getByRole("navigation", {
      name: "CapSight",
      exact: true,
    });
    await expect(
      navigation.getByRole("link", { name: "Workspace", exact: true }),
    ).toBeInViewport();
    await expect(
      navigation.getByRole("link", { name: "How CapSight Works" }),
    ).toBeInViewport();
    await expect(
      page.getByRole("button", { name: "Switch to dark theme" }),
    ).toBeInViewport();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.getByRole("button", { name: /Adjust$/ }).click();
    await expect(page.getByText("Adjust · Designed capability")).toBeVisible();
    await page.getByRole("link", { name: "Explore the capabilities" }).click();
    await expect(
      page.getByRole("heading", { name: "More than a final number." }),
    ).toBeInViewport();
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth,
        ),
      )
      .toBe(true);

    await navigation
      .getByRole("link", { name: "Workspace", exact: true })
      .click();
    await expect(
      page.getByRole("heading", { level: 1, name: /Shared Workspace/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Saved work is temporarily unavailable",
      }),
    ).toBeVisible();
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth,
        ),
      )
      .toBe(true);
    await navigation.getByRole("link", { name: "How CapSight Works" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Every decision,\s*connected\./,
    );
  });
}
