'use client';

import Image from 'next/image';
import Dropdown from '@/components/Dropdown';

interface DropdownReportProps {
  title: string;
  detail: string;
  positive: string;
  negative: string;
  className?: string;
  open?: boolean;
}

export default function DropdownReport({
  title,
  detail,
  positive,
  negative,
  className,
  open = false,
}: DropdownReportProps) {
  const detailSentences = detail.match(/[^.?!]+[.?!]/g) || []; // 문장을 . ? ! 단위로 끊기

  return (
    <Dropdown title={title}>
      <p>
        {detailSentences.map((sentence: string, index: number) => (
          <span
            key={index}
            className="text-body1 text-gray-80 hover:text-primary-100 font-medium transition-colors duration-200"
          >
            {sentence}{' '}
          </span>
        ))}
      </p>
      <div className="bg-gray-0 flex flex-col gap-[16px] rounded-[14px] p-[20px]">
        <div className="flex gap-[8px]">
          <Image
            src="/icons/sparkles.svg"
            width={20}
            height={20}
            alt="AI 총평"
          />
          <p className="text-headline1 font-semibold">AI 총평</p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-body1 font-semibold">이런 점은 좋아요</p>
          <p className="text-body1 text-gray-80 font-medium">{positive}</p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-body1 font-semibold">조금 더 개선해봐요</p>
          <p className="text-body1 text-gray-80 font-medium">{negative}</p>
        </div>
      </div>
    </Dropdown>
  );
}
