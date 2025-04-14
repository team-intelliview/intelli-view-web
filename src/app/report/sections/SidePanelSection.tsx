import {
  AnswerCompleteness,
  InterviewAttitude,
  JDFitness,
} from '../components';

export default function SidePanelSection() {
  return (
    <div className="flex w-[30%] flex-col gap-[20px]">
      <AnswerCompleteness />
      <JDFitness /> <InterviewAttitude />
    </div>
  );
}
