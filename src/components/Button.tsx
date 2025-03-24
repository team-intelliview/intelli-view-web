import { cn } from '@/utils/string';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: 'sm' | 'lg' | 'md';
  variant?: 'primary' | 'secondary' | 'start' | 'stop';
  sort?: 'default' | 'chip';
}

export default function Button({
  text,
  size = 'lg',
  variant = 'primary',
  className,
  sort = 'default',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center font-semibold transition-colors duration-200 hover:cursor-pointer disabled:cursor-not-allowed',
        size === 'sm' && 'h-[39px] w-[106px]',
        size === 'lg' && 'h-[48px] w-[173px]',
        variant === 'secondary' &&
          'bg-gray-10 hover:bg-gray-40 disabled:text-gray-40 disabled:hover:bg-gray-10',
        variant === 'primary' &&
          'bg-primary-90 disabled:bg-primary-60 disabled:hover:bg-primary-60 hover:bg-blue-dim text-white',
        variant === 'start' &&
          'bg-green disabled:bg-green/40 disabled:hover:bg-green/40 hover:bg-green-dim text-white',
        variant === 'stop' &&
          'bg-red disabled:hover:bg-red hover:bg-red-dim text-white hover:text-white',
        sort === 'chip' &&
          'border-primary-90 text-body1 h-fit w-fit rounded-[30px] px-[16px] py-[8px]',
        sort === 'default' &&
          'text-body2 rounded-[12px] font-semibold text-white',
        className,
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
