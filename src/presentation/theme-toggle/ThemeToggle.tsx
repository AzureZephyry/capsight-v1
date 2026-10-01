"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import {
  applyTheme,
  readStoredTheme,
  themeChangeEvent,
  themeStorageKey,
  type Theme,
} from "./theme-preference";
import styles from "./ThemeToggle.module.css";

function subscribeToTheme(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === themeStorageKey || event.key === null) {
      applyTheme(event.newValue === "dark" ? "dark" : "light");
    }
  }
  window.addEventListener(themeChangeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(themeChangeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );
  const isDark = theme === "dark";

  useLayoutEffect(() => {
    // Also restore the preference after React's development-mode remount.
    const storedTheme = readStoredTheme();
    if (storedTheme) applyTheme(storedTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // An unavailable preference store must not disable the control.
    }
    applyTheme(nextTheme);
  }

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={styles.toggle}
      onClick={toggleTheme}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      type="button"
    >
      <span aria-hidden="true" className={styles.track}>
        <span className={styles.thumb} />
        <svg className={styles.sun} viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M12 2.5v2m0 15v2M5.3 5.3l1.4 1.4m10.6 10.6 1.4 1.4M2.5 12h2m15 0h2M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.7"
          />
        </svg>
        <svg className={styles.moon} viewBox="0 0 24 24" fill="none">
          <path
            d="M20.1 15.4A8.3 8.3 0 0 1 8.6 3.9a8.3 8.3 0 1 0 11.5 11.5Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      </span>
    </button>
  );
}
