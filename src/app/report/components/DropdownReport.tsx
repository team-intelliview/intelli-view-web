'use client';

import { cn } from '@/utils/string';
import { useState } from 'react';
import Image from 'next/image';

interface DropdownProps {
  title: string;
  detail: string;
  positive: string;
  negative: string;
  className?: string;
  open?: boolean;
}

export default function Dropdown({
  title,
  detail,
  positive,
  negative,
  className,
  open = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(open);
  const detailSentences = detail.match(/[^.?!]+[.?!]/g) || [];

  return (
    <div
      className={cn(
        'border-gray-20 items-start rounded-[16px] border bg-white p-[32px] break-keep hover:cursor-pointer',
        className,
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between">
        <p className="text-body1 text-gray-90 font-semibold">{title}</p>
        <Image
          width={24}
          height={24}
          src={isOpen ? '/icons/arrow_up.svg' : '/icons/arrow_bottom.svg'}
          alt="arrow"
        />
      </div>
      <div
        className={cn(
          'mt-[32px] flex flex-col gap-[32px] leading-loose transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100' : 'absolute h-0 overflow-hidden opacity-0',
        )}
      >
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
      </div>
    </div>
  );
}
