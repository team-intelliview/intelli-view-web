'use client';

import { PATH } from '@/constants';
import { useUserState } from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const InfoSection = () => {
  const router = useRouter();

  const { name } = useUserState();

  const handleMyResumeClick = () => {
    router.push(PATH.MODIFY_RESUME);
  };

  return (
    <div className="flex items-center justify-between py-[48px]">
      <p className="text-title2 text-gray-90 font-semibold">
        👋 {name}님, 안녕하세요
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
        />
      </button>
    </div>
  );
};

export default InfoSection;
