import { cn } from '@/utils/string';

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function Content({ children, className }: ContentProps) {
  return (
    <div className={cn('flex h-screen w-screen', className)}>{children}</div>
  );
}
