'use client';

import Button from '@/components/Button';
import { PATH } from '@/constants';
import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  const handleHomeButtonClick = () => {
    router.push(PATH.HOME);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-2xl">
      <p>문제가 발생했어요</p>
      <Button text="HOME" variant="primary" onClick={handleHomeButtonClick} />
    </div>
  );
}
