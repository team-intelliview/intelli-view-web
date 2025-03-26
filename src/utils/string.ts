import { REQUEST_OPTION } from '@/constants';
import { RequestItem } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toKoreanRequestType(type: RequestItem) {
  switch (type) {
    case REQUEST_OPTION.INTERVIEW:
      return '면접';
    case REQUEST_OPTION.COVER_LETTER:
      return '자기소개서';
  }
}
