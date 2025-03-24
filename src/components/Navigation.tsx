import { cn } from '@/utils/string';

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <nav
      className={cn(
        'border-gray-10 sticky top-0 z-15 h-[64px] w-full border-b-[2px] bg-white',
      )}
    >
      <div className="flex">{children}</div>
    </nav>
  );
}
