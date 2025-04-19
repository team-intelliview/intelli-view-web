'use client';

import { PATH } from '@/constants';
import Navigation from './Navigation';
import { useContentState } from '@/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ReportNav() {
  const router = useRouter();
  const { job, compony } = useContentState();

  const handleGoBackClick = () => {
    router.push(PATH.HOME);
  };

  return (
    <Navigation className="absolute flex w-full px-[60px]">
      <div className="flex gap-[12px] items-center">
        <button className="hover:cursor-pointer" onClick={handleGoBackClick}>
          <Image
            src="/icons/arrow_left.svg"
            width={34}
            height={34}
            alt="뒤로 가기"
          />
        </button>
        <p className="text-heading2 font-semibold">
          {compony} | {job}
        </p>
      </div>
    </Navigation>
  );
}
