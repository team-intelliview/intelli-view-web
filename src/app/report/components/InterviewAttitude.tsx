import FeedbackCard from '@/widgets/FeedbackCard';

interface AttitudeCardProps {
  title: string;
  content: string;
}

export default function InterviewAttitude() {
  return (
    <FeedbackCard
      title="면접 태도"
      subTitle={
        <p className="text-heading2 text-gray-80 font-semibold">
          ✨ 자신감 있어 보여요
        </p>
      }
      describe={`논리성, 명확성, 연관성을 기준으로 측정해요\n논리성: 주장에 대한 논리가 있는지\n명확성: 답변이 모호하지 않고 핵심이 분명한지\n연관성: 답변이 질문과 직접적으로 관련 있는지`}
      content={
        <div className="grid grid-cols-2 gap-[12px]">
          <AttitudeCard title="손" content="자연스러운 고개 움직임" />
          <AttitudeCard title="손" content="자연스러운 고개 움직임" />
          <AttitudeCard title="손" content="자연스러운 고개 움직임" />
          <AttitudeCard title="손" content="자연스러운 고개 움직임" />
        </div>
      }
    />
  );
}

function AttitudeCard({ title, content }: AttitudeCardProps) {
  return (
    <div className="bg-gray-0 flex flex-col gap-[10px] rounded-[12px] p-[20px]">
      <p className="text-gray-80 text-body2">{title}</p>
      <p className="text-body1 font-medium">{content}</p>
    </div>
  );
}
