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
      } else return 'AI 면접 준비';
    case REQUEST_OPTION.COVER_LETTER:
      return 'AI 자기소개서 첨삭';
  }
}

export const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(duration % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export function addSearchParams<T>(
  endpoint: string,
  params: Record<string | number, T>,
): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      searchParams.append(key, String(value));
    }
  }

  return `${endpoint}?${searchParams.toString()}`;
}
