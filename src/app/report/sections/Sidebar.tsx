'use client';

import { ExpressionCorrectionItem, FeedbackItem } from '@/types';
import { cn } from '@/utils';
import HelpCard from '@/widgets/HelpCard';
import Image from 'next/image';
import { useState } from 'react';

type LabelStatus = '개선 전' | '개선 후';

export default function Sidebar({
  expressionCorrection,
}: {
  expressionCorrection: FeedbackItem['expressionCorrection'];
}) {
  const [isDescribeModalOpen, setIsDescribeModalOpen] = useState(false);

  return (
    <div className="border-gray-20 flex w-[30%] flex-col gap-[24px] rounded-[16px] border bg-white p-[24px]">
      <div className="flex items-center gap-[4px]">
        <p className="text-heading2 text-gray-90 font-semibold">
          부적절 언어 감지
        </p>
        <div className="relative">
          <button
            className="flex items-center hover:cursor-pointer"
            onClick={() => setIsDescribeModalOpen((prev) => !prev)}
          >
            <Image src="/icons/help.svg" width={20} height={20} alt="help" />
          </button>
          {isDescribeModalOpen && (
            <HelpCard
              title="부적절 언어 감지"
              describe={
                <>
                  <p>
                    면접에 사용하면 안 되는 단어와 표현들을 위험, 경고 2가지
                    단계로 노출해요
                  </p>
                  <ul>
                    <li>위험 (사용하면 치명적일 수 있는 단어 및 표현)</li>
                    <li>경고 (상황에 따라 조심해서 사용해야 하는 표현)</li>
                  </ul>
                </>
              }
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        {expressionCorrection ? (
          expressionCorrection.map(({ original, suggestion }) => (
            <AttitudeCard
              key={original}
              original={original}
              suggestion={suggestion}
            />
          ))
        ) : (
          <p className="text-body3 text-gray-80">
            감지된 부적절한 언어가 없어요.
          </p>
        )}
      </div>
    </div>
  );
}

function AttitudeCard({ original, suggestion }: ExpressionCorrectionItem) {
  return (
    <div className="border-gray-20 shadow-shadow3 flex w-full flex-col rounded-[12px] border font-medium">
      <div className="flex flex-col gap-[8px] px-[12px] pt-[12px] pb-[16px]">
        <AttitudeLabel status="개선 전" />
        <p className="text-body3 text-gray-70 font-semibold">"{original}"</p>
      </div>
      <div className="border-gray-20 border-b" />
      <div className="flex flex-col gap-[8px] px-[12px] pt-[12px] pb-[16px]">
        <AttitudeLabel status="개선 후" />
        <p className="text-body3 font-semibold">"{suggestion}"</p>
      </div>
    </div>
  );
}

function AttitudeLabel({ status }: { status: LabelStatus }) {
  return (
    <div
      className={cn(
        'flex w-fit rounded-[4px] border px-[6px] py-[2px]',
        status === '개선 전'
          ? 'bg-gray-10 border-gray-30 text-gray-80'
          : 'bg-primary-40 border-primary-60 text-blue-dim',
      )}
    >
      <p className="font-regular text-label">{status}</p>
    </div>
  );
}
