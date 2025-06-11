'use client';

import { PATH } from '@/constants';
import useLogin from '@/hooks/useLogin';
import { useRouter } from 'next/navigation';
import ArrowRight from '@assets/icons/arrow_right.svg';

const InfoSection = () => {
  const router = useRouter();
  const { data } = useLogin();

  const handleMyResumeClick = () => {
    router.push(PATH.MODIFY_RESUME);
  };

  if (!data) return null;

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
        <ArrowRight width={24} height={24} className="h-auto w-auto" />
      </button>
    </div>
  );
};

export default InfoSection;
