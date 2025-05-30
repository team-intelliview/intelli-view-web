import { PROGRESSING_STATUS } from '@/constants';

export type ProcessingStatus = keyof typeof PROGRESSING_STATUS;
export interface CoverLetterItem {
  question: string;
  answer: string;
}
