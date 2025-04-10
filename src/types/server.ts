import { STATUS } from '@/constants/api';

export type StatusOption = keyof typeof STATUS;

export type ServerResponse<T> = {
  status: StatusOption;
  code: string;
  message: string;
  data: T;
};
