'use server';

import { createURL, END_POINTS } from '@/constants/api';
import { ServerResponse } from '@/types';
import { cookies } from 'next/headers';

interface AccessToken {
  token: string;
  expirationTime: number;
}

async function setAccessTokenCookie({ token, expirationTime }: AccessToken) {
  const cookieStore = await cookies();

  cookieStore.set({
    name: 'access_token',
    value: token,
    maxAge: expirationTime,
    httpOnly: true,
    secure: true,
    path: '/',
  });
}

async function getAccessToken(): Promise<AccessToken | null> {
  const response = await fetch(createURL(END_POINTS.REISSUE), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.log(response.status);
    return null;
  }

  const result = await response.json();
  return result;
}

export async function serverFetch<T>({
  url,
  fetchOptions,
}: {
  url: string;
  fetchOptions?: RequestInit;
}): Promise<ServerResponse<T>> {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get('refresh_token')?.value;
  let accessToken = cookieStore.get('access_token')?.value;

  if (!refreshToken) {
    throw new Error('refresh token이 없어요');
  }

  if (!accessToken) {
    const tokenData = await getAccessToken();

    if (!tokenData?.token) {
      throw new Error('access token을 받아오지 못했습니다');
    }

    await setAccessTokenCookie(tokenData);
    accessToken = tokenData.token;
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error = new Error(errorData.message, errorData.status);
      throw error;
    }

    const data = await response.json();
    return data as ServerResponse<T>;
  } catch (error) {
    throw error;
  }
}
