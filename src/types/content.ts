import { INTERVIEW_OPTION, REQUEST_OPTION } from '@/constants';

export type RequestOption =
  (typeof REQUEST_OPTION)[keyof typeof REQUEST_OPTION];
export type InterviewOption =
  (typeof INTERVIEW_OPTION)[keyof typeof INTERVIEW_OPTION];

export interface WriteItem {
  compony: string;
  job: string;
}

export interface InterviewInfoType extends WriteItem {
  form: RequestOption;
}
