const storageKey = "theme";

const prefersDarkTheme = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const preferredTheme = (): string => {
  return prefersDarkTheme() ? "dark" : "light"
};

const getTheme = (): string => {
  if ((typeof localStorage) === 'undefined') {
    return preferredTheme();
  }
  return localStorage.getItem(storageKey) ?? preferredTheme()
};

export {
  preferredTheme,
  prefersDarkTheme,
  getTheme,
  storageKey,
}