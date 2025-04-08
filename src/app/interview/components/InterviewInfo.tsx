'use client';

import { useContentState } from '@/hooks';
import { toKoreanRequestType } from '@/utils';
import Image from 'next/image';

export default function InterviewInfoSection() {
  const { job, compony, type, interviewType } = useContentState();

  return (
    <div className="border-gray-20 text-headline1 flex flex-col gap-[16px] rounded-[16px] border bg-white px-[20px] py-[24px] font-medium">
      <div className="flex gap-[20px]">
        <div className="flex gap-[8px]">
          <Image src="/icons/marker.svg" alt="기업" width={20} height={20} />
          <p className="text-gray-70">기업</p>
        </div>
        <p className="text-gray-80">{compony}</p>
      </div>
      <div className="flex gap-[20px]">
        <div className="flex gap-[8px]">
          <Image src="/icons/luggage.svg" alt="직무" width={20} height={20} />
          <p className="text-gray-70">직무</p>
        </div>
        <p className="text-gray-80">{job}</p>
      </div>
      <div className="flex gap-[20px]">
        <div className="flex gap-[8px]">
          <Image src="/icons/person.svg" alt="형식" width={20} height={20} />
          <p className="text-gray-70">형식</p>
        </div>
        <p className="text-gray-80">
          {toKoreanRequestType({ type, option: interviewType })}
        </p>
      </div>
    </div>
  );
}
