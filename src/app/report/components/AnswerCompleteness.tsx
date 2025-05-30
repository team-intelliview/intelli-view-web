import { CompletionItem, DashboardItem } from '@/types';
import { cn } from '@/utils';
import FeedbackCard from '@/widgets/FeedbackCard';

interface RadicalProcessProps {
  percentage: number;
  title: string;
  color: string;
}

export default function AnswerCompleteness({
  avg,
  logical,
  relevance,
  clarity,
}: CompletionItem) {
  return (
    <FeedbackCard
      title="종합 답변 완성도"
      subTitle={
        <p className="text-body1 font-medium text-[#C4C5C5]">
          <span className="text-heading2 text-gray-80 font-semibold">
            {avg}%{' '}
          </span>
          / 100
        </p>
      }
      describe={`논리성, 명확성, 연관성을 기준으로 측정해요\n논리성: 주장에 대한 논리가 있는지\n명확성: 답변이 모호하지 않고 핵심이 분명한지\n연관성: 답변이 질문과 직접적으로 관련 있는지`}
      content={
        <div className="flex justify-center gap-[24px] px-[24px] py-[32px]">
          <RadicalProcess
            percentage={logical}
            title="논리성"
            color="text-primary-100"
          />
          <RadicalProcess
            percentage={relevance}
            title="연관성"
            color="text-purple"
          />
          <RadicalProcess
            percentage={clarity}
            title="명확성"
            color="text-green"
          />
        </div>
      }
    />
  );
}

function RadicalProcess({ percentage, title, color }: RadicalProcessProps) {
  return (
    <div className="flex flex-col gap-[12px] text-center">
      <div
        className={cn(
          'radial-progress text-heading2 bg-primary-40 font-semibold',
          color,
        )}
        style={
          {
            '--value': percentage,
            '--size': '120px',
          } as React.CSSProperties
        }
      >
        <p className="text-heading3 text-[#3E5463]">{percentage}%</p>
      </div>
      <p className="text-body1 text-gray-80">{title}</p>
    </div>
  );
}
