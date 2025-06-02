import { ProcessingStatus } from './coverLetter';

export type InterviewItem = {
  id: string;
  title: string;
  status: ProcessingStatus;
  progress: number;
  totalQuestion: number;
  completeQuestion: number;
  updatedAt: string;
};
