import { cn } from '@/utils/string';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string;
}

export default function ModuleButton({
  text,
  icon,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'border-gray-20 hover:bg-gray-20 flex w-[306.5px] flex-col items-center gap-[10px] rounded-[20px] border px-[20px] py-[32px] text-center hover:cursor-pointer',
        className,
      )}
      {...rest}
    >
      <p className="text-[38px]">{icon}</p>
      <p className="text-heading1">{text}</p>
    </button>
  );
}
