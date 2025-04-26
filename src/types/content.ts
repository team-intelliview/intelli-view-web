import { INTERVIEW_OPTION, REQUEST_OPTION, REPORT_OPTION } from '@/constants';

export type RequestOption =
  (typeof REQUEST_OPTION)[keyof typeof REQUEST_OPTION];
export type InterviewOption =
  (typeof INTERVIEW_OPTION)[keyof typeof INTERVIEW_OPTION];
export type ReportOption = (typeof REPORT_OPTION)[keyof typeof REPORT_OPTION];

export interface JobInfoItem {
  compony: string;
  position: string;
}

export interface InterviewInfoType extends JobInfoItem {
  form: RequestOption;
}

export type logListItem = {
  time: string;
  image: string;
};

export type questionItem = {
  id: number;
  question: string;
};
