'use client';

import PageLayout from '../PageLayout';
import Content from '@/components/Content';
import { useEffect, useState } from 'react';
import {
  DetailReportSection,
  OverallReviewSection,
  Sidebar,
  SidePanelSection,
  SortToggleSection,
} from './sections';
import { useContentState } from '@/hooks';
import { REQUEST_OPTION, REPORT_OPTION } from '@/constants';
import type { FeedbackItem, ReportOption } from '@/types';
import { getCoverLetterFeedback, getInterviewFeedback } from '@/api/feedback';
import Loading from './loading';
import { report } from '@/mocks';

export default function Feedback() {
  const { type } = useContentState();

  const [selected, setSelected] = useState<ReportOption>(
    REPORT_OPTION.DASH_BOARD,
  );
  const [feedback, setFeedback] = useState<FeedbackItem | null>();

  const renderContent = () => {
    const isDashBoard = selected === REPORT_OPTION.DASH_BOARD;

    const contentMap = {
      [REQUEST_OPTION.COVER_LETTER]: <DetailView feedback={feedback} />,
      [REQUEST_OPTION.INTERVIEW]: isDashBoard ? (
        <DashboardView feedback={feedback} />
      ) : (
        <DetailView feedback={feedback} />
      ),
    };

    return contentMap[type] || null;
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      switch (type) {
        case REQUEST_OPTION.COVER_LETTER:
          const coverLetterFeedback = await getCoverLetterFeedback();
          setFeedback(coverLetterFeedback);
          break;
        case REQUEST_OPTION.INTERVIEW:
          const interviewFeedback = await getInterviewFeedback();
          setFeedback(interviewFeedback);
          break;
        default:
          setFeedback(null);
      }
    };

    fetchFeedback();
  }, []);

  if (!feedback) return <Loading />;

  return (
    <PageLayout
      reportNav
      className="bg-gray-0 flex h-full max-w-screen gap-[20px] px-[112px] py-[70px]"
    >
      <Content className="h-full w-full flex-col gap-[20px]">
        {type !== REQUEST_OPTION.COVER_LETTER && (
          <SortToggleSection onChange={setSelected} selected={selected} />
        )}
        <div className="flex gap-[40px] pt-[24px]">{renderContent()}</div>
      </Content>
    </PageLayout>
  );
}

function DetailView({ feedback }: { feedback: FeedbackItem }) {
  return (
    <>
      <DetailReportSection feedback={feedback.details} />
      <Sidebar expressionCorrection={feedback.expressionCorrection} />
    </>
  );
}

function DashboardView({ feedback }: { feedback: FeedbackItem }) {
  return (
    <>
      <OverallReviewSection feedback={feedback.dashboard} />
      <SidePanelSection feedback={feedback.dashboard} />
    </>
  );
}
