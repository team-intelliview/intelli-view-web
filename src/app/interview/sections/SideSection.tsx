import { questionList } from '@/mocks';
import InterviewInfoSection from '../components/InterviewInfo';
import ProcessLog from '../components/ProcessLog';

export default function SideSection() {
  return (
    <div className="flex w-fit flex-col gap-[20px]">
      <InterviewInfoSection />
      <ProcessLog entireCnt={questionList.length} />
    </div>
  );
}
