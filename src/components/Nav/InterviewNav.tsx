'use client';

import Navigation from './Navigation';
import Chip from '../Chip';
import Button from '@/components/Button';
import { useModal } from '@/hooks';
import { MODAL } from '@/constants';

interface Props {
  time: string;
}

export default function InterviewNav({ time }: Props) {
  const { openModal } = useModal();

  const handleQuitInterview = () => {
    openModal(MODAL.QUIT_INTERVIEW);
  };

  return (
    <Navigation className="absolute flex items-center justify-between px-[60px]">
      <div className="flex gap-[16px]">
        <p className="text-heading2 text-gray-90 font-semibold">
          실전 모의 면접
        </p>
        <Chip text="면접 진행" time={time} state="inProgress" />
      </div>
      <Button
        text="면접 나가기"
        size="sm"
        variant="secondary"
        onClick={handleQuitInterview}
      />
    </Navigation>
  );
}
