import { PATH } from '@/constants/path';
import { redirect } from 'next/navigation';

export default function Home() {
  const isLoggedIn = true;

  isLoggedIn ? redirect(PATH.HOME) : redirect(PATH.LOGIN);
}
