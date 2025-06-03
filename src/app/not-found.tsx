'use client';

import Button from '@/components/Button';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleHomeButtonClick = () => {
    router.push(PATH.HOME);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-8 text-3xl">
      <p>페이지를 찾을 수 없어요.</p>
      <Button text="HOME" variant="primary" onClick={handleHomeButtonClick} />
    </div>
  );
}
