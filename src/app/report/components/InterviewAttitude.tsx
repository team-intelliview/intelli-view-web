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
      describe={`대면 면접: AI가 사용자의 몸짓, 자세를 바탕으로 분석해요\n비대면 면접: AI가 사용자의 대면 시선, 눈 깜박임 등을 바탕으로 분석해요`}
      content={
        <div className="grid grid-cols-2 gap-[12px]">
          <AttitudeCard title="손" content="자연스러운 고개 움직임" />
          <AttitudeCard title="머리" content="자연스러운 고개 움직임" />
          <AttitudeCard title="팔" content="자연스러운 고개 움직임" />
          <AttitudeCard title="자세" content="자연스러운 고개 움직임" />
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
