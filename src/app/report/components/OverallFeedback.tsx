import Card from '@/components/Card';
import Image from 'next/image';

export default function OverallFeedback() {
  return (
    <Card className="p-[32px]">
      <div className="flex gap-[8px]">
        <Image src="/icons/sparkles.svg" width={20} height={20} alt="AI 총평" />
        <p>AI 총평</p>
      </div>
      <p className="text-gray-70 mt-[16px] whitespace-pre-line">
        {`이번 면접을 통해 사용자는 프로덕트 디자인로서의 경험과 기술적 깊이를 잘 보여주었습니다. 특히 UI/UX 디자인 시스템을 구축한 경험이나 사용자 경험을 개선하려는 노하우에서 상당히 구체적이고 실질적인 접근을 보여주었으며, 문제 해결 능력이 뛰어난 것으로 평가되었습니다.\n\n
        이번 면접을 통해 사용자는 프로덕트 디자인로서의 경험과 기술적 깊이를 잘 보여주었습니다. 특히 UI/UX 디자인 시스템을 구축한 경험이나 사용자 경험을 개선하려는 노하우에서 상당히 구체적이고 실질적인 접근을 보여주었으며, 문제 해결 능력이 뛰어난 것으로 평가되었습니다.\n\n이번 면접을 통해 사용자는 프로덕트 디자인로서의 경험과 기술적 깊이를 잘 보여주었습니다. 특히 UI/UX 디자인 시스템을 구축한 경험이나 사용자 경험을 개선하려는 노하우에서 상당히 구체적이고 실질적인 접근을 보여주었으며, 문제 해결 능력이 뛰어난 것으로 평가되었습니다.\n`}
      </p>
    </Card>
  );
}
