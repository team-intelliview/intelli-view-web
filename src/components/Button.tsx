import { cn } from '@/utils/string';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: 'sm' | 'lg' | 'md';
  variant?: 'primary' | 'secondary' | 'start' | 'stop';
  sort?: 'default' | 'chip';
  selected?: boolean;
}

const buttonSizes = {
  sm: 'h-[39px] w-[106px]',
  md: '',
  lg: 'h-[48px] w-[173px]',
};

const buttonVariants = {
  primary:
    'bg-primary-90 disabled:bg-primary-60 disabled:hover:bg-primary-60 hover:bg-blue-dim !text-white',
  secondary:
    'bg-gray-10 hover:bg-gray-40 text-gray-90 disabled:text-gray-40 disabled:hover:bg-gray-10',
  start:
    'bg-green disabled:bg-green/40 disabled:hover:bg-green/40 hover:bg-green-dim text-white',
  stop: 'bg-red disabled:hover:bg-red hover:bg-red-dim text-white hover:text-white',
};

const buttonSorts = {
  chip: 'h-fit w-fit rounded-[30px] px-[16px] py-[8px]',
  default: 'text-body2 rounded-[12px] font-semibold',
};

export default function Button({
  text,
  size = 'lg',
  variant,
  className,
  sort = 'default',
  selected,
  ...rest
}: ButtonProps) {
  const sizeClass = buttonSizes[size];
  const variantClass = variant ? buttonVariants[variant] : '';
  const sortClass = buttonSorts[sort];
  const selectedClass =
    sort === 'chip' && selected
      ? 'bg-gray-80 font-semibold text-white'
      : 'bg-none';

  return (
    <button
      className={cn(
        'flex items-center justify-center font-semibold transition-colors duration-200 hover:cursor-pointer disabled:cursor-not-allowed',
        sizeClass,
        variantClass,
        sortClass,
        selectedClass,
        className,
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
