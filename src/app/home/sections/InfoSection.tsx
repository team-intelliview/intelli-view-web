'use client';

import { PATH } from '@/constants';
import useLogin from '@/hooks/useLogin';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const InfoSection = () => {
  const router = useRouter();
  const { data } = useLogin();

  const handleMyResumeClick = () => {
    router.push(PATH.MODIFY_RESUME);
  };

  return (
    <div className="flex h-auto w-full items-center justify-between py-[48px]">
      <p className="text-title2 text-gray-90 font-semibold">
        👋 {data.name}님, 안녕하세요
      </p>
      <button
        className="flex gap-[4px] hover:cursor-pointer"
        onClick={handleMyResumeClick}
      >
        <p className="text-gray-90 text-heading2 font-semibold">내 이력서</p>
        <Image
          width={24}
          height={24}
          src="/icons/arrow_right.svg"
          alt="right"
          className="h-auto w-auto"
        />
      </button>
    </div>
  );
};

export default InfoSection;
