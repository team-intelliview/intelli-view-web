'use client';

import { cn } from '@/utils';
import HelpCard from '@/widgets/HelpCard';
import Image from 'next/image';
import { useState } from 'react';

type LabelStatus = '위험' | '경고';

interface AttitudeCardProps {
  title: string;
  content: string;
  status: LabelStatus;
}

export default function Sidebar() {
  const [isDescribeModalOpen, setIsDescribeModalOpen] = useState(false);

  return (
    <div className="border-gray-20 flex h-screen w-[30%] flex-col gap-[24px] rounded-[16px] border bg-white p-[24px]">
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
      <div className="flex flex-col gap-[12px]">
        <AttitudeCard
          title="부정적 성향"
          content="제가 그건 못해서..."
          status="위험"
        />
        <AttitudeCard
          title="강한 단정적 표현"
          content="그건 맞지 않아요"
          status="위험"
        />
        <AttitudeCard
          title="직장에 대한 부정적 이야기"
          content="직장에 근무했을 때 전 직장 동료가 너무 무능했어요. 그래서 제가 잘 해도 큰 성과를 이루지 못했어요."
          status="경고"
        />
        <AttitudeCard
          title="무례하거나 무책임한 표정"
          content="제 생각엔 별로 안 중요한 것 같은데요."
          status="경고"
        />
      </div>
    </div>
  );
}

function AttitudeCard({ title, content, status }: AttitudeCardProps) {
  return (
    <div className="bg-gray-0 flex flex-col gap-[16px] rounded-[12px] p-[20px] font-medium">
      <div className="flex justify-between">
        <p className="text-gray-80 text-body2">{title}</p>
        <AlertLabel status={status} />
      </div>
      <p className="text-body1">"{content}"</p>
    </div>
  );
}

function AlertLabel({ status }: { status: LabelStatus }) {
  return (
    <div
      className={cn(
        'flex gap-[4px] rounded-[8px] p-[4px]',
        status === '경고' ? 'bg-gray-20' : 'bg-red/10 text-red',
      )}
    >
      <Image
        src={
          status === '경고'
            ? '/icons/alert_circle.svg'
            : '/icons/alert_triangle.svg'
        }
        alt="상태"
        height={18}
        width={18}
      />
      <p className="font-regular text-label">
        {status === '경고' ? '경고' : '위험'}
      </p>
    </div>
  );
}
