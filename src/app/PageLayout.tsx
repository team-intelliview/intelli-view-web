import HomeNav from '@/components/Nav/HomeNav';
import { cn } from '../utils/string';
import InterviewNav from '@/components/Nav/InterviewNav';

interface PageProps {
  homeNav?: boolean;
  interviewNav?: boolean;
  time?: string;
  className?: string;
  children: React.ReactNode;
  breadCrumb?: boolean;
}

export default function Page({
  homeNav,
  interviewNav,
  time,
  className,
  children,
  breadCrumb,
}: PageProps) {
  return (
    <>
      {homeNav && <HomeNav breadCrumb={breadCrumb} />}
      {interviewNav && <InterviewNav time={time} />}
      <div className={cn('min-h-screen', className)}>{children}</div>
    </>
  );
}
