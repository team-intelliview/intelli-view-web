'use client';

import { useRef } from 'react';
import { LogCardList } from './LogCardList';
import { RequestOption } from '@/types/content';
import EmptyContent from './EmptyContent';
import { useLogList } from '../hooks/useLogList';

interface LogContainerProps {
  type: RequestOption;
}

const LogContainer = ({ type }: LogContainerProps) => {
  const { data } = useLogList({
    type,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hide flex h-full w-full flex-col gap-[20px] overflow-y-scroll"
    >
      {data.contents.length ? (
        <LogCardList log={data.contents} />
      ) : (
        <EmptyContent type={type} />
      )}
    </div>
  );
};

export default LogContainer;
