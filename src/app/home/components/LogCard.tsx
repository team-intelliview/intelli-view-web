'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import ProcessCard from '@/components/ProcessCard';
import { MODAL, REQUEST_OPTION } from '@/constants';
import { useContent, useModal } from '@/hooks';
import { contentCardList } from '@/mocks';
import type { RequestOption } from '@/types';
import { cn, toKoreanRequestType } from '@/utils';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  type: RequestOption;
}

export default function LogCard({ type }: Props) {
  const { changeType } = useContent();
  const { openModal } = useModal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const titleIcon =
    type === REQUEST_OPTION.INTERVIEW
      ? '/icons/message.svg'
      : '/icons/paper.svg';

  const handleProcessClick = () => {
    changeType(type);
    openModal(MODAL.INTERVIEW_PROGRESS);
  };

  return (
    <Card
      className={cn(
        'relative flex w-[571px] flex-col bg-white px-[24px] pb-[32px]',
      )}
    >
      <div className="flex justify-between pb-[28px]">
        <p className="text-heading1 text-gray-80 flex items-center gap-[4px] font-semibold">
          <Image width={24} height={24} src={titleIcon} alt="title" />
          {toKoreanRequestType({ type })}
        </p>
        <Button
          variant="secondary"
          size="sm"
          text="진행하기"
          onClick={handleProcessClick}
        />
      </div>
      <div
        ref={scrollRef}
        className="scrollbar-hide flex h-full w-full flex-col gap-[20px] overflow-y-scroll"
      >
        {contentCardList.length ? (
          contentCardList.map(
            ({
              id,
              inProgress,
              image,
              title,
              process,
              answer,
              responseDate,
            }) => (
              <ProcessCard
                key={id}
                inProgress={inProgress}
                image={image}
                title={title}
                progress={process}
                question={answer}
                response={responseDate}
              />
            ),
          )
        ) : (
          <EmptyContent type={type} />
        )}
      </div>
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-t from-white to-transparent',
        )}
      />
    </Card>
  );
}

function EmptyContent({ type }: Props) {
  const { changeType } = useContent();

  const iconImage =
    type === REQUEST_OPTION.INTERVIEW
      ? '/icons/message_blink.svg'
      : '/icons/paper_blink.svg';
  const emptyMessage =
    type === REQUEST_OPTION.INTERVIEW
      ? `진행된 면접이 없습니다.
모의 면접을 진행해보세요.`
      : `작성된 자기소개서가 없습니다.
자기소개를 작성해보세요.`;
  const buttonText =
    type === REQUEST_OPTION.INTERVIEW ? '면접 진행하기' : '작성 진행하기';

  return (
    <div
      className={cn(
        'py-auto flex h-full flex-col place-content-center items-center gap-[20px] text-center',
      )}
    >
      <Image src={iconImage} alt="blink" width={48} height={48} />
      <p className="text-headline1 whitespace-pre-wrap">{emptyMessage}</p>
      <button
        type="button"
        className="flex gap-4 px-[12px] py-[6px] hover:cursor-pointer"
        onClick={() => changeType(type)}
      >
        <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
        <p>{buttonText}</p>
      </button>
    </div>
  );
}
