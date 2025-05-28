'use client';

import { VideoItem } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

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
        src={videoData[currentIndex].url || '/interview.mp4'}
        className="mx-auto flex w-full items-center rounded-[18px]"
      />
      <div className="flex w-full items-center justify-center gap-8">
        <Image
          src="/icons/arrow_left.svg"
          alt="arrow_left"
          width={24}
          height={24}
          onClick={handleArrowBackButtonClick}
        />
        <p className="text-headline2 text-gray-80 font-medium">
          {currentIndex + 1}번 질문
        </p>
        <Image
          src="/icons/arrow_right.svg"
          alt="arrow_right"
          width={24}
          height={24}
          onClick={handleArrowNextButtonClick}
        />
      </div>
    </>
  );
}
