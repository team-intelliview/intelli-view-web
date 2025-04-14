import { InterviewVideo, OverallFeedback } from '../components';

export default function OverallReviewSection() {
  return (
    <div className="flex w-[70%] flex-col gap-[20px]">
      <InterviewVideo />
      <OverallFeedback />
    </div>
  );
}
