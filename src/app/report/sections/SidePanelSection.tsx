import { DashboardItem } from '@/types';
import {
  AnswerCompleteness,
  InterviewAttitude,
  JDFitness,
} from '../components';

export default function SidePanelSection({
  feedback,
}: {
  feedback: DashboardItem;
}) {
  return (
    <div className="flex w-[30%] flex-col gap-[20px]">
      <AnswerCompleteness
        avg={feedback.completion.avg}
        logical={feedback.completion.logical}
        relevance={feedback.completion.relevance}
        clarity={feedback.completion.clarity}
      />
      <JDFitness
        rate={feedback.jdFit.rate}
        description={feedback.jdFit.description}
      />
      <InterviewAttitude
        overall={feedback.posture.overall}
        hand={feedback.posture.hand}
        head={feedback.posture.head}
        arm={feedback.posture.arm}
        body={feedback.posture.body}
      />
    </div>
  );
}
