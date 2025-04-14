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

export default function Feedback() {
  const [selected, setSelected] = useState<'dashBoard' | 'detail'>('dashBoard');

  return (
    <PageLayout
      feedbackNav
      className="bg-gray-0 flex max-w-screen gap-[20px] p-[70px]"
    >
      <Content className="w-full flex-col gap-[20px] py-[24px]">
        <SortToggleSection onChange={setSelected} selected={selected} />
        {selected === 'dashBoard' ? (
          <div className="flex gap-[20px]">
            <OverallReviewSection />
            <SidePanelSection />
          </div>
        ) : (
          <div className="flex gap-[20px]">
            <DetailReportSection />
            <Sidebar />
          </div>
        )}
      </Content>
    </PageLayout>
  );
}
