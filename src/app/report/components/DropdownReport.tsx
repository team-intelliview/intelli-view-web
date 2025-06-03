'use client';

import Image from 'next/image';
import Dropdown from '@/components/Dropdown';
import { cn } from '@/utils';
import { DetailItem } from '@/types';

interface DropdownReportProps extends DetailItem {
  className?: string;
  open?: boolean;
}

export default function DropdownReport({
  index,
  question,
  answer,
  positive,
  negative,
}: DropdownReportProps) {
  const detailSentences =
    typeof answer === 'string' ? answer.match(/[^.?!]+[.?!]/g) || [answer] : [];

  return (
    <Dropdown question={`${index}. ${question}`} open>
      {detailSentences.map((sentence: string, index: number) => (
        <span
          key={index}
          className={cn(
            'text-body1 text-gray-80 font-medium transition-colors duration-200 hover:font-bold',
          )}
        >
          {sentence}{' '}
        </span>
      ))}
      <div className="bg-gray-0 mt-[32px] flex flex-col gap-[16px] rounded-[14px] p-[20px]">
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
