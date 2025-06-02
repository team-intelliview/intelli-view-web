import { createURL, END_POINTS } from '@/constants/api';
import { getAccessToken, getCookie, getRefreshToken, setTokens } from './token';
import { ServerResponse } from '@/types/server';

interface FetchWithTokenProps {
  url: string;
  options?: RequestInit;
  contentType?: boolean;
}

async function getNewAccessToken() {
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

  return result;
}

async function reissueToken(): Promise<boolean> {
  try {
    const refreshToken = getCookie('refresh_token');
    const response = await getNewAccessToken();

    const accessToken = response?.data?.token;

    if (!accessToken || !refreshToken) {
      return false;
    }

    if (typeof window !== 'undefined') {
      setTokens(accessToken, refreshToken);
    }

    return true;
  } catch (error) {
    return false;
  }
}

export async function fetchRequest<T>({
  url,
  options,
  contentType = true,
}: FetchWithTokenProps): Promise<ServerResponse<T>> {
  let token = getAccessToken();

  if (!token) {
    const renewedToken = await reissueToken();
    if (!renewedToken) token = getRefreshToken();
  }

  async function fetching(): Promise<ServerResponse<T>> {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...(options?.headers || {}),
        ...(contentType && { 'Content-Type': 'application/json' }),
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data as ServerResponse<T>;
  }

  return fetching();
}
