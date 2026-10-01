export type Theme = "light" | "dark";
export const themeStorageKey = "capsight:theme";
export const themeChangeEvent = "capsight:theme-change";

// Fixed application code only; no user-provided values are interpolated.
export const themeBootstrap = `(function(){try{var t=localStorage.getItem("${themeStorageKey}");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){}})()`;

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function readStoredTheme(): Theme | undefined {
  try {
    return localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
  } catch {
    // Storage may be blocked. The current tab's theme still works.
    return undefined;
  }
}
