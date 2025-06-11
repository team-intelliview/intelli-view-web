import { useState, useEffect } from 'react';

import { FeedbackItem, RequestOption } from '@/types';
import { REQUEST_OPTION } from '@/constants';
import { REQUEST_STATUS } from '@/constants/api';
import { getInterviewsStatus } from '@/lib/api/interview';
import {
  getCoverLetterFeedback,
  getCoverLetterStatus,
  getInterviewFeedback,
} from '@/lib/api/feedback';

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
        if (!isMounted) return;

        const result =
          type === REQUEST_OPTION.INTERVIEW
            ? await getInterviewsStatus()
            : await getCoverLetterStatus();

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
