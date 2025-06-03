'use client';

import { useContentState } from '@/hooks';
import { toKoreanRequestType } from '@/utils';
import Marker from '@assets/icons/marker.svg';
import Luggage from '@assets/icons/luggage.svg';
import Person from '@assets/icons/person.svg';

export default function InterviewInfoSection() {
  const { job, compony, type, interviewType } = useContentState();

  const InfoList = [
    {
      icon: <Marker width={20} height={20} />,
      label: '기업',
      value: compony,
    },
    {
      icon: <Luggage width={20} height={20} />,
      label: '직무',
      value: job,
    },
    {
      icon: <Person width={20} height={20} />,
      label: '형식',
      value: toKoreanRequestType({ type, option: interviewType }),
    },
  ];

  return (
    <div className="border-gray-20 text-headline1 flex flex-col gap-[16px] rounded-[16px] border bg-white px-[20px] py-[24px] font-medium">
      {InfoList.map(({ icon, label, value }) => (
        <div className="flex gap-[20px]" key={label}>
          <div className="flex gap-[8px]">
            {icon}
            <p className="text-gray-70">{label}</p>
          </div>
          <p className="text-gray-80">{value}</p>
        </div>
      ))}
    </div>
  );
}
