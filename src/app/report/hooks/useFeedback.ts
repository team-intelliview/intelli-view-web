import { useState, useEffect } from 'react';

import { FeedbackItem, RequestOption } from '@/types';
import { REQUEST_OPTION } from '@/constants';
import { REQUEST_STATUS } from '@/constants/api';
import {
  getCoverLetterFeedback,
  getCoverLetterStatus,
  getInterviewFeedback,
} from '@/api/feedback';
import { getInterviewsStatus } from '@/api/interview';

interface Props {
  type: RequestOption;
}

export const useFeedback = ({ type }: Props) => {
  const [feedback, setFeedback] = useState<FeedbackItem>();
  const [isPollingComplete, setIsPollingComplete] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const pollingStatus = async () => {
      try {
        const result =
          type === REQUEST_OPTION.INTERVIEW
            ? await getInterviewsStatus()
            : await getCoverLetterStatus();
        const isSuccess = result === REQUEST_STATUS.COMPLETED;

        if (!isMounted) return;

        if (isSuccess) {
          setIsPollingComplete(true);
        } else if (result === REQUEST_STATUS.REQUEST_FAILED) {
          console.error('Request failed');
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
          const data =
            type === REQUEST_OPTION.INTERVIEW
              ? await getInterviewFeedback()
              : await getCoverLetterFeedback();
          setFeedback(data);
        } catch (error) {
          console.error('Failed to fetch questions:', error);
        }
      };

      fetchQuestions();
    }
  }, [isPollingComplete]);

  return { feedback, isPollingComplete };
};
