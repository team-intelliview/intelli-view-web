import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { InterviewOption, RequestOption } from '@/types';
import { contentAtom, updateContent } from '@/atoms/content';

export function useContent() {
  const setContent = useSetAtom(updateContent);

  const changeType = useCallback(
    (type: RequestOption) => {
      setContent({ key: 'type', value: type });
    },
    [setContent],
  );

  const changeInterviewType = useCallback(
    (interviewType: InterviewOption) => {
      setContent({ key: 'interviewType', value: interviewType });
    },
    [setContent],
  );

  const changeJob = useCallback(
    (job: string) => {
      setContent({ key: 'job', value: job });
    },
    [setContent],
  );

  const changeCompony = useCallback(
    (compony: string) => {
      setContent({ key: 'compony', value: compony });
    },
    [setContent],
  );

  return { changeType, changeInterviewType, changeJob, changeCompony };
}

export function useContentState() {
  const content = useAtomValue(contentAtom);
  return content;
}
