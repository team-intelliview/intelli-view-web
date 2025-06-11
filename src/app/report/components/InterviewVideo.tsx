'use client';

import { VideoItem } from '@/types';
import { useState } from 'react';
import ArrowLeft from '@assets/icons/arrow_left_simple.svg';
import ArrowRight from '@assets/icons/arrow_right.svg';

export default function InterviewVideo({
  videoData,
}: {
  videoData: Array<VideoItem>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowBackButtonClick = () => {
    if (currentIndex === 0) setCurrentIndex(videoData.length - 1);
    else setCurrentIndex((prev) => prev - 1);
  };

  const handleArrowNextButtonClick = () => {
    if (currentIndex === videoData.length - 1) setCurrentIndex(0);
    else setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      <video
        controls
        src={videoData[currentIndex].url}
        className="mx-auto flex w-full items-center rounded-[18px]"
      />
      <div className="flex w-full items-center justify-center gap-8">
        <ArrowLeft onClick={handleArrowBackButtonClick} />
        <p className="text-headline2 text-gray-80 font-medium">
          {currentIndex + 1}번 질문
        </p>
        <ArrowRight onClick={handleArrowNextButtonClick} />
      </div>
    </>
  );
}
