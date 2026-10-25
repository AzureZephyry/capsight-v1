import { expect, test } from "@playwright/test";

test("the orbital story hydrates cleanly and keeps keyboard explanations equivalent with reduced motion", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/how-capsight-works");
  const loop = page.getByRole("region", { name: "One connected process." });
  for (const step of [
    "Calculate",
    "Explain",
    "Simulate",
    "Compare",
    "Validate",
    "Adjust",
  ]) {
    const button = loop.getByRole("button", { name: new RegExp(`${step}$`) });
    await button.focus();
    await page.keyboard.press("Space");
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(button).toHaveCSS("outline-style", "solid");
    await expect(loop.getByText(`${step} · Designed capability`)).toBeVisible();
    await expect(
      loop.locator('button[aria-controls="loop-detail"][aria-pressed="true"]'),
    ).toHaveCount(1);
  }
  expect(
    await loop.evaluate(
      (element) =>
        element
          .getAnimations({ subtree: true })
          .filter((animation) => animation.playState === "running").length,
    ),
  ).toBe(0);
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth <=
        document.documentElement.clientWidth,
    ),
  ).toBe(true);
  await expect(loop.getByText(/not live production data/)).toBeVisible();
  expect(errors).toEqual([]);
});

test("dark orbital lighting follows a fine pointer, resets on exit, and rapid selections settle on the latest explanation", async ({
  page,
}) => {
  await page.goto("/how-capsight-works");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  const loop = page.getByRole("region", { name: "One connected process." });
  // The SVG's parent is the bounded interaction field, not the surrounding page.
  const orbit = loop.locator('svg[viewBox="0 0 600 600"]').locator("..");
  await orbit.scrollIntoViewIfNeeded();
  const bounds = await orbit.boundingBox();
  expect(bounds).not.toBeNull();
  await page.mouse.move(
    bounds!.x + bounds!.width * 0.7,
    bounds!.y + bounds!.height * 0.4,
  );
  await expect
    .poll(() =>
      orbit.evaluate((element) =>
        element.style.getPropertyValue("--glow-power"),
      ),
    )
    .toBe("1");
  const position = await orbit.evaluate((element) =>
    element.style.getPropertyValue("--glow-x"),
  );
  expect(Number.parseFloat(position)).toBeGreaterThan(60);
  await page.mouse.move(0, 0);
  await expect
    .poll(() =>
      orbit.evaluate((element) =>
        element.style.getPropertyValue("--glow-power"),
      ),
    )
    .toBe("");
  for (const step of ["Explain", "Adjust", "Compare"]) {
    await loop.getByRole("button", { name: new RegExp(`${step}$`) }).click();
  }
  await expect(loop.getByText("Compare · Designed capability")).toBeVisible();
  await expect(loop.getByRole("button", { name: /Compare$/ })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect
    .poll(() =>
      orbit.evaluate(
        (element) =>
          element
            .getAnimations({ subtree: true })
            .filter((animation) => animation.playState === "running").length,
      ),
    )
    .toBe(0);
});
