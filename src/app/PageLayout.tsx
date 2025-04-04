import HomeNav from '@/components/Nav/HomeNav';
import { cn } from '../utils/string';

interface PageProps {
  homeNav?: boolean;
  className?: string;
  children: React.ReactNode;
  breadCrumb?: boolean;
}

export default function Page({
  homeNav,
  className,
  children,
  breadCrumb,
}: PageProps) {
  return (
    <>
      {homeNav && <HomeNav breadCrumb={breadCrumb} />}
      <div className={cn('min-h-screen', className)}>{children}</div>
    </>
  );
}
