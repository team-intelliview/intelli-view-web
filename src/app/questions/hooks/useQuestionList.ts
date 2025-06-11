import { useState, useEffect } from 'react';

import { REQUEST_STATUS } from '@/constants/api';
import type { QuestionItem } from '@/types/question';
import {
  getInterviewsQuestion,
  getInterviewsStatus,
} from '@/lib/api/interview';

export function useQuestionList() {
  const [questionList, setQuestionList] = useState<QuestionItem[]>([]);
  const [isPollingComplete, setIsPollingComplete] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const pollingStatus = async () => {
      try {
        if (!isMounted) return;

        const result = await getInterviewsStatus();

        if (result === REQUEST_STATUS.COMPLETED) {
          setIsPollingComplete(true);
        } else {
          setTimeout(pollingStatus, 1000);
        }
      } catch (error) {
        console.error('Polling failed:', error);
      }
    };

    pollingStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isPollingComplete) {
      const fetchQuestions = async () => {
        try {
          const data = await getInterviewsQuestion();
          setQuestionList(data.contents);
        } catch (error) {
          console.error('Failed to fetch questions:', error);
        }
      };

      fetchQuestions();
    }
  }, [isPollingComplete]);

  return { questionList, isPollingComplete, setQuestionList };
}
