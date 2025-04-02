import { PATH, REQUEST_OPTION } from '@/constants';
import { useContentState } from '@/hooks';
import { cn, toKoreanRequestType } from '@/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Process = {
  [REQUEST_OPTION.INTERVIEW]: [
    '서류 작성',
    '면접 준비',
    '면접 시작',
    '리포트 확인',
  ],
  [REQUEST_OPTION.COVER_LETTER]: [
    '서류 작성',
    '자기소개서 준비',
    '리포트 확인',
  ],
};

export default function BreadCrumb() {
  const { type, interviewType } = useContentState();
  const pathname = usePathname();
  const [isNow, setIsNow] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case PATH.WRITE_SORT:
      case PATH.JOB_DESCRIPTION:
      case PATH.QUESTIONS:
      case PATH.COVER_LETTER:
        setIsNow(0);
        break;
      case PATH.COVER_LETTER:
      case PATH.CHECK_VOICE:
      case PATH.CHECK_CAMERA:
        setIsNow(1);
        break;
      case PATH.INTERVIEW:
        setIsNow(3);
        break;
      case PATH.REPORT:
        setIsNow(Process[type].length - 1);
        break;
    }
  }, []);

  const title =
    type === REQUEST_OPTION.COVER_LETTER
      ? toKoreanRequestType({ type })
      : toKoreanRequestType({ type, option: interviewType });

  return (
    <div className="text-body1 flex font-medium text-gray-50">
      <ul className="flex">
        <li className="px-[12px] py-[4px]">{title}</li>
        {Process[type].map((item, index) => (
          <div className="flex items-center" key={index}>
            <Image
              src="/icons/arrow_right.svg"
              width={24}
              height={24}
              alt="arrow"
            />
            <li
              className={cn(
                'px-[12px] py-[4px]',
                isNow === index && 'bg-primary-40 text-gray-90 rounded-[30px]',
              )}
            >
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
