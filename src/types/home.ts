import { ProcessingStatus } from './coverLetter';

export interface LogListItem {
  id: string;
  title: string;
  status: ProcessingStatus;
  progress: number;
  totalQuestion: number;
  completeQuestion: number;
  updatedAt: string;
}
