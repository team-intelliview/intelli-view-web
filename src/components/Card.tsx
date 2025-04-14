import { cn } from '@/utils/string';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-gray-20 flex flex-col gap-[10px] rounded-[20px] p-[24px]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
