import { useCallback } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';
import { isLoggedInAtom, setIsLoggedInAtom } from '@/atoms/login';

export function useLoginState() {
  const setIsLoggedIn = useSetAtom(setIsLoggedInAtom);

  const updateLogged = useCallback(
    (logged: boolean) => {
      setIsLoggedIn(logged);
    },
    [setIsLoggedIn],
  );

  return { updateLogged } as const;
}

export function useIsLoggedInState() {
  return useAtomValue(isLoggedInAtom);
}
