'use client';

import { PATH } from '@/constants';
import { createURL, END_POINTS } from '@/constants/api';
import { ServerResponse } from '@/types';

interface fetchWithTokenProps {
  url: string;
  options?: RequestInit;
}

export default function getApiUrl(endPoint: string) {
  return new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${endPoint}`);
}

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('ACCESS_TOKEN');
}

export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('REFRESH_TOKEN');
}

export function setTokens(accessToken: string, refreshToken: string) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('ACCESS_TOKEN', accessToken);
  sessionStorage.setItem('REFRESH_TOKEN', refreshToken);
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

async function reissueToken(): Promise<boolean> {
  try {
    const response = await fetch(createURL(END_POINTS.REISSUE), {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();

    const accessToken = result?.data?.token;
    const refreshToken = getCookie('refresh_token');

    if (!accessToken || !refreshToken) {
      return false;
    }

    setTokens(accessToken, refreshToken);

    return true;
  } catch (error) {
    return false;
  }
}

export async function fetchRequest<T>({ url, options }: fetchWithTokenProps) {
  let token = getAccessToken();

  if (!token) {
    const reissued = await reissueToken();
    if (reissued) {
      token = getAccessToken();
    } else throw new Error('액세스 토큰 발급 실패');
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options?.headers || {}),
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data as ServerResponse<T>;
}
