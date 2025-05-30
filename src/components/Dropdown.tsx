import { cn } from '@/utils/string';
import { useState } from 'react';
import ArrowUp from '@/assets/icons/arrow_up.svg';
import ArrowBottom from '@/assets/icons/arrow_bottom.svg';

interface DropdownProps {
  question: string;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
}

export default function Dropdown({
  question,
  children,
  className,
  open = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div
      className={cn(
        'border-gray-20 items-start rounded-[16px] border bg-white p-[32px] break-keep hover:cursor-pointer',
        className,
      )}
    >
      <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-body1 text-gray-90 font-semibold">{question}</p>
        {isOpen ? (
          <ArrowUp width={24} height={24} />
        ) : (
          <ArrowBottom width={24} height={24} />
        )}
      </div>
      <div
        className={cn(
          'mt-[32px] leading-loose transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100' : 'absolute h-0 overflow-hidden opacity-0',
        )}
      >
        {children}
      </div>
    </div>
  );
}
