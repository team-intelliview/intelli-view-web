'use client'

import Navigation from './Navigation';
import { useContentState } from '@/hooks';

export default function FeedbackNav() {
  const { job, compony } = useContentState();

  return (
    <Navigation className="absolute flex w-full items-center justify-between gap-[12px] px-[60px]">
      <p className="text-heading2 font-semibold">
        {compony}|{job}
      </p>
    </Navigation>
  );
}
