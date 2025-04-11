import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { updateUser, userAtom } from '@/atoms/user';
import type { ProviderOption } from '@/types';

export function useUser() {
  const setContent = useSetAtom(updateUser);

  const changeEmail = useCallback(
    (email: string) => {
      setContent({ key: 'email', value: email });
    },
    [setContent],
  );

  const changeName = useCallback(
    (name: string) => {
      setContent({ key: 'name', value: name });
    },
    [setContent],
  );

  const changeProfile = useCallback(
    (profile: string) => {
      setContent({ key: 'profile', value: profile });
    },
    [setContent],
  );

  const changeProvider = useCallback(
    (provider: ProviderOption) => {
      setContent({ key: 'provider', value: provider });
    },
    [setContent],
  );

  return { changeEmail, changeName, changeProfile, changeProvider };
}

export function useUserState() {
  const user = useAtomValue(userAtom);
  return user;
}
