import { cn } from '@/utils/string';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'bg-gray-0 flex flex-col gap-[10px] rounded-[20px] p-[20px]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
