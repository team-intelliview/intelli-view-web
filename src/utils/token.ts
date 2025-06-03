'use client';

export default function getApiUrl(endPoint: string) {
  return new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${endPoint}`);
}

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('ACCESS_TOKEN');
}

export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return getCookie('refresh_token');
  return sessionStorage.getItem('REFRESH_TOKEN');
}

export function setTokens(name: string, token: string) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(name, token);
}

export function removeTokens() {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem('ACCESS_TOKEN');
  sessionStorage.removeItem('REFRESH_TOKEN');
}

export function getCookie(cookieName: string): string | null {
  if (typeof window === 'undefined') return null; // SSR에서 방지

  const cookieData = document.cookie;
  const cookieNameEq = `${cookieName}=`;
  const start = cookieData.indexOf(cookieNameEq);
  if (start === -1) return null;

  const end =
    cookieData.indexOf(';', start) === -1
      ? cookieData.length
      : cookieData.indexOf(';', start);

  return decodeURIComponent(
    cookieData.substring(start + cookieNameEq.length, end),
  );
}
