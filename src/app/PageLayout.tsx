import HomeNav from '@/components/Nav/HomeNav';
import { cn } from '../utils/string';
import InterviewNav from '@/components/Nav/InterviewNav';
import FeedbackNav from '@/components/Nav/FeedbackNav';

interface PageProps {
  homeNav?: boolean;
  interviewNav?: boolean;
  time?: string;
  className?: string;
  children: React.ReactNode;
  breadCrumb?: boolean;
  feedbackNav?: boolean;
}

export default function Page({
  homeNav,
  interviewNav,
  time,
  className,
  children,
  breadCrumb,
  feedbackNav,
}: PageProps) {
  return (
    <>
      {homeNav && <HomeNav breadCrumb={breadCrumb} />}
      {interviewNav && <InterviewNav time={time} />}
      {feedbackNav && <FeedbackNav />}
      <div className={cn('min-h-screen', className)}>{children}</div>
    </>
  );
}
