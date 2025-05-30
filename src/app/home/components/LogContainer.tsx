'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import { PATH, REQUEST_OPTION } from '@/constants';
import { useContent } from '@/hooks';
import { LogListItem, RequestOption } from '@/types';
import { cn, toKoreanRequestType } from '@/utils';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { LogCardList } from './LogCardList';
import { EmptyContent } from './EmptyContent';
import Message from '@/assets/icons/message.svg';
import Paper from '@/assets/icons/paper.svg';

interface LogContainerProps {
  type: RequestOption;
  log: Array<LogListItem>;
}

export const LogContainer = ({ type, log }: LogContainerProps) => {
  const router = useRouter();
  const { changeType } = useContent();
  const scrollRef = useRef<HTMLDivElement>(null);

  const titleLogo = type === REQUEST_OPTION.INTERVIEW ? <Message /> : <Paper />;

  const handleProcessClick = () => {
    changeType(type);
    type === REQUEST_OPTION.INTERVIEW
      ? router.push('/home/progress')
      : router.push(PATH.WRITE_SORT);
  };

  return (
    <Card
      className={cn(
        'relative flex w-[571px] flex-col bg-white px-[24px] pb-[32px]',
      )}
    >
      <div className="flex justify-between pb-[28px]">
        <div className="text-heading1 text-gray-80 flex items-center gap-[4px] font-semibold">
          {titleLogo}
          <span>{toKoreanRequestType({ type })}</span>
        </div>
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
        {log.length ? <LogCardList log={log} /> : <EmptyContent type={type} />}
      </div>

      <div
        className={cn(
          'pointer-events-none absolute bottom-0 left-0 h-[120px] w-full rounded-b-[20px] bg-gradient-to-t from-white to-transparent',
        )}
      />
    </Card>
  );
};
