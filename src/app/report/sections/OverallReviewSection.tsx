import { DashboardItem } from '@/types';
import { InterviewVideo, OverallFeedback } from '../components';

export default function OverallReviewSection({
  feedback,
}: {
  feedback: DashboardItem;
}) {
  return (
    <div className="flex w-[70%] flex-col gap-[40px]">
      <InterviewVideo videoData={feedback.videos} />
      <OverallFeedback overall={feedback.overall} />
    </div>
  );
}
