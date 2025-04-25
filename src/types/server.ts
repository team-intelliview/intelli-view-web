import { STATUS } from '@/constants/api';

export type StatusOption = keyof typeof STATUS;

export type ServerResponse<T> = {
  status: StatusOption;
  code: string;
  message: string;
  data: T;
};

export type PaginationParams = {
  page?: number;
  size?: number;
};

type PagiableItem = {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  end: boolean;
};

export type Pagination<T = unknown> = {
  contents: Array<T>;
  pageable: PagiableItem;
};
