import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import {
  interviewAtom,
  updateInterview,
  deleteAllInterview,
  updateNowInterviewing,
} from '@/atoms/interview';
import { logListItem } from '@/types';

export function useInterview() {
  const setInterview = useSetAtom(updateInterview);
  const removeAllInterview = useSetAtom(deleteAllInterview);

  const addInterview = useCallback(
    (interview: logListItem) => {
      setInterview(interview);
    },
    [setInterview],
  );

  const resetInterview = useCallback(() => {
    removeAllInterview();
  }, [deleteAllInterview]);

  return { addInterview, resetInterview };
}

export function useInterviewState() {
  const interviews = useAtomValue(interviewAtom);
  return interviews;
}

export function useNowInterviewing() {
  const setNowInterviewing = useSetAtom(updateNowInterviewing);

  const changeNowInterviewing = useCallback(
    (interviewOrder: number) => {
      setNowInterviewing(interviewOrder);
    },
    [setNowInterviewing],
  );

  return { changeNowInterviewing };
}
