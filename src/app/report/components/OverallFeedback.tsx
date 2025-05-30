import Card from '@/components/Card';
import { DashboardItem } from '@/types';
import Image from 'next/image';

export default function OverallFeedback({
  overall,
}: {
  overall: DashboardItem['overall'];
}) {
  return (
    <Card className="p-[32px]">
      <div className="flex gap-[8px]">
        <Image src="/icons/sparkles.svg" width={20} height={20} alt="AI 총평" />
        <p>AI 총평</p>
      </div>
      <p className="text-gray-70 text-body1 mt-[16px] whitespace-pre-wrap">
        {overall}
      </p>
    </Card>
  );
}
