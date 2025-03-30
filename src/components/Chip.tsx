import { cn } from '@/utils/string';
import Image from 'next/image';

interface ChipProps {
  text: string;
  size?: 'sm' | 'md';
  state?: 'complete' | 'inProgress' | 'before';
  time?: string;
  className?: string;
}

export default function Chip({
  text,
  state = 'inProgress',
  size = 'md',
  time,
  className,
  ...rest
}: ChipProps) {
  const stateContent = {
    complete: (
      <>
        <Image
          src="/icons/check_contained.svg"
          alt="complete"
          width={20}
          height={20}
        />
        <p>{text}</p>
      </>
    ),
    inProgress: (
      <>
        <Image
          src="/icons/waveform.svg"
          alt="inProgress"
          width={20}
          height={20}
        />
        <p className="text-gray-70">{text}</p>
        <p className="text-gray-90 font-semibold">{time}</p>
      </>
    ),
    before: <p>{text}</p>,
  };

  return (
    <div
      className={cn(
        'text-body1 flex w-fit items-center justify-center rounded-[30px] pr-[16px] pl-[12px]',
        state === 'complete' &&
          '!bg-gray-10 text-gray-70 gap-[4px] border border-[#EDEBEB]',
        state === 'inProgress' &&
          '!text-gray-90 !border-primary-90 gap-[4px] border bg-white',
        state === 'before' &&
          'text-gray-60 gap-[4px] border border-[#EDEBEB] bg-white',
        size === 'sm' && 'bg-primary-40 gap-[8px] border-none',
        className,
      )}
      {...rest}
    >
      {stateContent[state]}
    </div>
  );
}
