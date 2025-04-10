import { createURL, END_POINTS } from '@/constants/api';
import type { User } from '@/types';
import { fetchWithToken } from '@/utils';

export const getUser = async (): Promise<User> => {
  const { data } = await fetchWithToken<User>({
    url: createURL(END_POINTS.USERS),
  });
  return data;
};
