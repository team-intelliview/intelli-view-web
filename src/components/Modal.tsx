import { cn } from '@/utils/string';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ children, className, ...rest }: ModalProps) {
  return (
    <div
      className={cn(
        'border-gray-20 shadow3 z-20 flex flex-col items-center rounded-[28px] border-2 bg-white',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
