import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const storageKey = "theme";

const prefersDarkTheme = (): boolean => {
  if (!browser) {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const preferredTheme = (): string => {
  return prefersDarkTheme() ? "dark" : "light"
};

const getInitialTheme = (): string => {
  if (!browser) return 'light';
  return localStorage.getItem(storageKey) ?? (prefersDarkTheme() ? "dark" : "light");
};

const theme = writable<string>(getInitialTheme());
const isDarkTheme = derived(theme, $theme => $theme === 'dark');

if (browser) {
  theme.subscribe(value => {
    localStorage.setItem(storageKey, value);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(value);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(storageKey)) {
        theme.set(e.matches ? 'dark' : 'light');
      }
  });
}

const toggleTheme = () => {
  theme.update(value => value === 'dark' ? 'light' : 'dark');
};


export {
  preferredTheme,
  prefersDarkTheme,
  storageKey,
  theme,
  isDarkTheme,
  toggleTheme
}
