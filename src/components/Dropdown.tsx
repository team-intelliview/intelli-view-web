import { cn } from '@/utils/string';
import { useState } from 'react';
import Image from 'next/image';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Dropdown({
  title,
  children,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'border-gray-20 items-start rounded-[16px] border bg-white p-[32px] break-keep hover:cursor-pointer',
        className,
      )}
    >
      <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-body1 text-gray-90 font-semibold">{title}</p>
        <Image
          width={24}
          height={24}
          src={isOpen ? '/icons/arrow_up.svg' : '/icons/arrow_bottom.svg'}
          alt="arrow"
        />
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
