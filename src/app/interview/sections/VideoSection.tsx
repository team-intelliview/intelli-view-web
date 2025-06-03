'use client';

import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Button from '@/components/Button';
import {
  useInterview,
  useInterviewState,
  useNowInterviewing,
} from '@/hooks/useInterview';
import { useInterviewVideoMutation } from '../hooks/useInterviewVideoMutation';
import { useVideoRecording } from '../hooks/useVideoRecording';

interface VideoSectionProps {
  questionCnt: number;
}

const VideoSection = ({ questionCnt }: VideoSectionProps) => {
  const webcamRef = useRef<Webcam | null>(null);

  const { addInterview, resetInterview } = useInterview();
  const { interviews } = useInterviewState();
  const { changeNowInterviewing } = useNowInterviewing();

  const { interviewVideoMutate, isPending, isSuccess } =
    useInterviewVideoMutation();

  const [isInterviewing, setIsInterviewing] = useState(false);

  const { handleStartRecording, handleStopRecording } = useVideoRecording({
    webcamRef,
    interviewVideoMutate,
    addInterview,
    interviews,
    changeNowInterviewing,
    questionCnt,
  });

  const handleInterviewReset = () => {
    resetInterview();
  };

  const handleRecording = async () => {
    setIsInterviewing((prev) => !prev);
    if (!isInterviewing) {
      await handleStartRecording();
    } else {
      await handleStopRecording();
    }
  };

  return (
    <div className="flex h-full w-full flex-col place-items-center gap-[40px]">
      <Webcam
        ref={webcamRef}
        id="interviewCamera"
        className="rounded-[24px]"
        audio={true}
        screenshotFormat="image/jpeg"
        mirrored
        videoConstraints={{ width: 1280, height: 720 }}
      />
      <Button
        onClick={handleRecording}
        text={isInterviewing ? '답변 종료' : '답변 시작'}
        variant={isInterviewing ? 'stop' : 'start'}
        disabled={isPending && !isSuccess}
      />
      <Button text="면접 초기화" onClick={handleInterviewReset} />
    </div>
  );
};

export default VideoSection;
