import { useState, useEffect } from 'react';
import { getInterviewsQuestion, getInterviewsStatus } from '@/api/interview';
import { REQUEST_STATUS } from '@/constants/api';
import type { QuestionItem } from '@/types/question';

export function useQuestionList() {
  const [questionList, setQuestionList] = useState<QuestionItem[]>([]);
  const [isPollingComplete, setIsPollingComplete] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const pollingStatus = async () => {
      try {
        const result = await getInterviewsStatus();
        const isSuccess = result === REQUEST_STATUS.COMPLETED;

        if (!isMounted) return;

        if (isSuccess) {
          setIsPollingComplete(true);
        } else {
          setTimeout(pollingStatus, 2000);
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
