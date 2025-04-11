'use client';

import { useUserState } from '@/hooks/useUser';
import Image from 'next/image';

export default function InfoSection() {
  const { name } = useUserState();

  return (
    <div className="flex items-center justify-between py-[48px]">
      <p className="text-title2 text-gray-90 font-semibold">
        👋 {name}님, 안녕하세요
      </p>
      <button className="flex gap-[4px] hover:cursor-pointer">
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
}
