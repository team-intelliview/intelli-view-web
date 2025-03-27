import { REQUEST_OPTION } from '@/constants';

export type RequestItem = (typeof REQUEST_OPTION)[keyof typeof REQUEST_OPTION];
