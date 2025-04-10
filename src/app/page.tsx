'use client'

import { PATH } from '@/constants/path';
import { useAuthStatus } from '@/hooks/useAuthStatus';
import { redirect } from 'next/navigation';

export default function Home() {
  const isLoggedIn = useAuthStatus();

  isLoggedIn ? redirect(PATH.HOME) : redirect(PATH.LOGIN);
}
