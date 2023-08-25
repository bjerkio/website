import { browser } from '$app/environment';

export function getToggles(): string[] {
  if (browser) {
    // get local storage value for toggles
    const toggles = localStorage.getItem('toggles');
    return toggles ? toggles.split(',') : [];
  }
  return [];
}

export function isEnabled(toggle: string): boolean {
  return getToggles().includes(toggle);
}
