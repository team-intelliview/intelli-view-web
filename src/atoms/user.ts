import { ProviderOption } from '@/types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type UserInfo = {
  name: string;
  email: string;
  profile: string;
  provider?: ProviderOption;
};

export const userAtom = atomWithStorage<UserInfo>('userAtom', {
  name: '',
  email: '',
  profile: '',
});

export const updateUser = atom(
  null,
  (
    get,
    set,
    update: {
      key: keyof UserInfo;
      value: string | ProviderOption | undefined;
    },
  ) => {
    const currentUser = get(userAtom);

    const updatedContent = {
      ...currentUser,
      [update.key]: update.value,
    };

    set(userAtom, updatedContent);
  },
);
