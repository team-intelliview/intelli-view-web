import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import {
  interviewAtom,
  deleteAllInterview,
  updateInterviewAtom,
} from '@/atoms/interview';
import { logListItem } from '@/types';

export function useInterview() {
  const setInterview = useSetAtom(updateInterviewAtom);
  const removeAllInterview = useSetAtom(deleteAllInterview);

  const addInterview = useCallback(
    (interview: logListItem) => {
      setInterview({ type: 'addLog', log: interview });
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
  const setInterviews = useSetAtom(updateInterviewAtom);

  const updateInterview = useCallback(
    (log: logListItem) => {
      setInterviews({ type: 'addLog', log });
    },
    [setInterviews],
  );

  const updateNowInterviewing = useCallback(
    (index: number) => {
      setInterviews({ type: 'setNowInterviewing', index });
    },
    [setInterviews],
  );

  return { interviews, updateInterview, updateNowInterviewing };
}

export function useNowInterviewing() {
  const setNowInterviewing = useSetAtom(updateInterviewAtom);
  const nowInterviewing = useAtomValue(interviewAtom).nowInterviewing;

  const changeNowInterviewing = useCallback(
    (interviewOrder: number) => {
      setNowInterviewing({ type: 'setNowInterviewing', index: interviewOrder });
    },
    [setNowInterviewing],
  );

  return { changeNowInterviewing, nowInterviewing };
}
