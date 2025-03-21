import { cn } from '@/utils/string';
import { ButtonHTMLAttributes } from 'react';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clicked?: boolean;
}

export default function Tab({
  text,
  clicked = false,
  className,
  ...rest
}: TabProps) {
  return (
    <button
      className={cn(
        'text-title3 text-gray-70 flex w-fit px-[8px] pt-[16px] pb-[12px] font-semibold hover:cursor-pointer',
        clicked
          ? 'text-gray-90 border-b-[3px]'
          : 'hover:bg-gray-10 hover:rounded-[12px]',
        className,
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
