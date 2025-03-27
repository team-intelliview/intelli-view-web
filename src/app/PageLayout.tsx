import HomeNav from '@/components/Nav/HomeNav';
import { cn } from '../utils/string';

interface PageProps {
  homeNav?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Page({ homeNav, className, children }: PageProps) {
  return (
    <>
      {homeNav && <HomeNav />}
      <div className={cn('min-h-screen', className)}>{children}</div>
    </>
  );
}
