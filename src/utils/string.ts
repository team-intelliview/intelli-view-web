import { INTERVIEW_OPTION, REQUEST_OPTION } from '@/constants';
import { InterviewOption, RequestOption } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface toKoreanRequestTypeProps {
  type: RequestOption;
  option?: InterviewOption;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toKoreanRequestType({
  type,
  option,
}: toKoreanRequestTypeProps) {
  switch (type) {
    case REQUEST_OPTION.INTERVIEW:
      if (option === INTERVIEW_OPTION.OFFLINE) {
        return '비대면 면접';
      } else if (option === INTERVIEW_OPTION.ONLINE) {
        return '대면 면접';
      } else return '면접';
    case REQUEST_OPTION.COVER_LETTER:
      return '자기소개서';
  }
}
