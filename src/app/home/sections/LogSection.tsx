'use client';

import { useRouter } from 'next/navigation';
import { RequestOption } from '@/types';
import { useContent } from '@/hooks';
import { PATH, REQUEST_OPTION } from '@/constants';
import Card from '@/components/Card';
import { cn, toKoreanRequestType } from '@/utils';
import Button from '@/components/Button';
import LogContainer from '../components/LogContainer';
import Message from '@assets/icons/message.svg';
import Paper from '@assets/icons/paper.svg';
interface LogSectionProps {
  type: RequestOption;
}

const LogSection = ({ type }: LogSectionProps) => {
  const router = useRouter();
  const { changeType } = useContent();

  const titleLogo = type === REQUEST_OPTION.INTERVIEW ? <Message /> : <Paper />;

  const handleProcessClick = () => {
    changeType(type);
    type === REQUEST_OPTION.INTERVIEW
      ? router.push('/home/progress')
      : router.push(PATH.JOB);
  };

  return (
    <Card
      className={cn(
        'relative flex w-full flex-col bg-white px-[24px] pb-[32px]',
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
      <LogContainer type={type} />
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 left-0 h-[120px] w-full rounded-b-[20px] bg-gradient-to-t from-white to-transparent',
        )}
      />
    </Card>
  );
};

export default LogSection;
