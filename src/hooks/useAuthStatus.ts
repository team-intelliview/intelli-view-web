'use client';

import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setTokens,
} from '@/utils';
import { useLoginState } from './useLoginState';

export function useAuthStatus() {
  const { updateLogged } = useLoginState();

  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (accessToken && refreshToken) {
    setTokens(accessToken, refreshToken);
    updateLogged(true);
  } else {
    removeTokens();
    updateLogged(false);
    return false;
  }
}
