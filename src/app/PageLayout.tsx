import HomeNav from '@/components/Nav/HomeNav';
import { cn } from '../utils/string';
import InterviewNav from '@/components/Nav/InterviewNav';
import ReportNav from '@/components/Nav/ReportNav';

interface PageProps {
  homeNav?: boolean;
  interviewNav?: boolean;
  className?: string;
  children: React.ReactNode;
  breadCrumb?: boolean;
  reportNav?: boolean;
}

export default function Page({
  homeNav,
  interviewNav,
  className,
  children,
  breadCrumb,
  reportNav,
}: PageProps) {
  return (
    <>
      {homeNav && <HomeNav breadCrumb={breadCrumb} />}
      {interviewNav && <InterviewNav />}
      {reportNav && <ReportNav />}
      <div className={cn('min-h-screen', className)}>{children}</div>
    </>
  );
}
