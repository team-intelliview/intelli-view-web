'use client';

import { PROGRESSING_STATUS } from '@/constants';
import { CoverLetterList } from '@/types';
import { cn } from '@/utils/string';
import dayjs from 'dayjs';
import Image from 'next/image';

interface ProcessCardProps extends CoverLetterList {
  labelClassName?: string;
  image?: string;
  clickMore?: () => void;
  className?: string;
}

export default function ProcessCard({
  id,
  title,
  status,
  progress,
  totalQuestion,
  completeQuestion,
  updatedAt,
  labelClassName,
  clickMore,
  image,
  className,
}: ProcessCardProps) {
  return (
    <div className="relative h-fit" id={`process-card-${id}`}>
      <div
        className={cn(
          'absolute top-0 left-0 h-full w-[6px] rounded-l-[12px]',
          status === PROGRESSING_STATUS.IN_PROGRESS
            ? 'bg-primary-100'
            : 'bg-gray-60',
        )}
      />
      <div
        className={cn(
          'shadow1 border-light flex items-start gap-[24px] rounded-r-[20px] border p-[20px]',
          className,
        )}
      >
        {image && (
          <Image
            src={image}
            alt="video"
            className="border-light rounded-[12px] border"
            width={140}
            height={90}
          />
        )}
        <div className="flex w-full flex-col gap-[8px]">
          <div className="flex w-full justify-between">
            <div
              className={cn(
                'text-body1 rounded-[30px] border px-[8px] py-[4px]',
                status === PROGRESSING_STATUS.IN_PROGRESS
                  ? 'text-blue bg-primary-40 border-gray-20'
                  : 'bg-gray-10 border-gray-30 text-gray-80',
                labelClassName,
              )}
            >
              {status === PROGRESSING_STATUS.IN_PROGRESS ? '진행 중' : '완료'}
            </div>
            <button
              className="border-gray-20 flex h-[28px] w-[28px] justify-center rounded-[4px] border bg-white hover:cursor-pointer"
              onClick={clickMore}
            >
              <Image src="/icons/dot.svg" alt="more" width={20} height={20} />
            </button>
          </div>
          <p className="text-headline1 font-semibold text-gray-100">{title}</p>
          <div className="gird-col-3 grid gap-[4px]">
            {status === PROGRESSING_STATUS.IN_PROGRESS ? (
              <>
                <p className="text-body1 font-regular text-gray-80">
                  진행률<span className="ml-[8px]">{progress}%</span>
                </p>
                <p className="text-body1 font-regular text-gray-80">
                  질문
                  <span className="ml-[8px]">
                    {completeQuestion}/{totalQuestion}
                  </span>
                </p>
                <p className="text-body1 font-regular text-gray-80">
                  응답일
                  <span className="ml-[8px]">
                    {dayjs(updatedAt).format('YYYY.MM.DD')}
                  </span>
                </p>
              </>
            ) : (
              <p className="text-body1 font-regular text-gray-80">
                제출일<span className="ml-[8px]">{updatedAt}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
