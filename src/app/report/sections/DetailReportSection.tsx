import type { DetailItem } from '@/types';
import { DropdownReport } from '../components';

export default function DetailReportSection({
  feedback,
}: {
  feedback: Array<DetailItem>;
}) {
  return (
    <div className="flex w-[70%] flex-col gap-[8px]">
      {feedback.map(({ index, question, answer, positive, negative, answerCorrections }) => (
        <DropdownReport
          key={index}
          open={index === 1}
          question={question}
          answer={answer}
          positive={positive}
          negative={negative}
          answerCorrections={answerCorrections}
          index={index}
        />
      ))}
    </div>
  );
}
