"use client";

import { useEffect, type RefObject } from "react";

/** A presentation-only connector, measured after layout; it never owns product state. */
export function useSelectionConnection(
  container: RefObject<HTMLElement | null>,
  path: RefObject<SVGPathElement | null>,
  selection: string | number,
) {
  useEffect(() => {
    const root = container.current;
    const line = path.current;
    if (!root || !line) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    let frame = 0;
    let disposed = false;
    const draw = () => {
      const source = root.querySelector('[data-connection-source="true"]');
      const target = root.querySelector("[data-connection-target]");
      if (!source || !target) return;
      const bounds = root.getBoundingClientRect();
      const a = source.getBoundingClientRect();
      const b = target.getBoundingClientRect();
      const x1 = a.right - bounds.left;
      const y1 = a.top + a.height / 2 - bounds.top;
      const x2 = b.left + b.width / 2 - bounds.left;
      const y2 = b.top + b.height / 2 - bounds.top;
      const beside = b.left > a.right + 10;
      const mid = (x1 + x2) / 2;
      // In a stacked layout, use the margin rather than crossing readable content.
      const gutter = 4;
      line.setAttribute(
        "d",
        beside
          ? `M ${x1} ${y1} H ${mid} V ${y2} H ${x2}`
          : `M ${a.left - bounds.left} ${y1} H ${gutter} V ${y2} H ${x2}`,
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };
    draw();
    if (!motion.matches) {
      animation = line.animate(
        [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        { duration: 440, easing: "cubic-bezier(.2,0,0,1)" },
      );
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    root
      .querySelectorAll("[data-connection-target], [data-connection-source]")
      .forEach((element) => observer.observe(element));
    void document.fonts.ready.then(() => {
      if (!disposed) schedule();
    });
    const stopMotion = () => {
      if (motion.matches) animation?.cancel();
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      animation?.cancel();
      motion.removeEventListener("change", stopMotion);
    };
  }, [container, path, selection]);
}
