import { PROGRESSING_STATUS } from '@/constants';

export type ProcessingStatus = keyof typeof PROGRESSING_STATUS;

export interface CoverLetterList {
  id: string;
  title: string;
  status: ProcessingStatus;
  progress: number;
  totalQuestion: number;
  completeQuestion: number;
  updatedAt: string;
}

export interface CoverLetterItem {
  question: string;
  answer: string;
}
