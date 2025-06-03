export const getStorageItem = (key: string): string | null => {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(key);
};

export const setStorageItem = (key: string, value: string): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(key, value);
};

export const removeStorageItem = (key: string): void => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(key);
};
