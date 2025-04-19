'use client';

import PageLayout from '../PageLayout';
import Content from '@/components/Content';
import { useState } from 'react';
import {
  DetailReportSection,
  OverallReviewSection,
  Sidebar,
  SidePanelSection,
  SortToggleSection,
} from './sections';
import { useContentState } from '@/hooks';
import { REQUEST_OPTION, REPORT_OPTION } from '@/constants';
import type { ReportOption } from '@/types';

export default function Feedback() {
  const { type } = useContentState();

  const [selected, setSelected] = useState<ReportOption>(
    REPORT_OPTION.DASH_BOARD,
  );

  const renderContent = () => {
    const isDashBoard = selected === REPORT_OPTION.DASH_BOARD;

    switch (type) {
      case REQUEST_OPTION.COVER_LETTER:
        return <DetailView />;
      case REQUEST_OPTION.INTERVIEW:
        return isDashBoard ? <DashboardView /> : <DetailView />;
    }
  };

  return (
    <PageLayout
      reportNav
      className="bg-gray-0 flex max-w-screen gap-[20px] p-[70px]"
    >
      <Content className="w-full flex-col gap-[20px]">
        {type !== REQUEST_OPTION.COVER_LETTER && (
          <SortToggleSection onChange={setSelected} selected={selected} />
        )}
        <div className="flex gap-[20px] pt-[24px]">{renderContent()}</div>
      </Content>
    </PageLayout>
  );
}

function DetailView() {
  return (
    <>
      <DetailReportSection />
      <Sidebar />
    </>
  );
}

function DashboardView() {
  return (
    <>
      <OverallReviewSection />
      <SidePanelSection />
    </>
  );
}
