import InterviewInfoSection from '../components/InterviewInfo';
import ProcessLog from '../components/ProcessLog';
import { QuestionItem } from '@/types/question';

interface SideSectionProps {
  questionList: QuestionItem[];
}

export default function SideSection({ questionList }: SideSectionProps) {
  return (
    <div className="flex w-[30%] flex-col gap-[20px]">
      <InterviewInfoSection />
      <ProcessLog entireCnt={questionList.length} />
    </div>
  );
}
