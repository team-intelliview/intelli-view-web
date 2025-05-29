'use client';

import { useCallback } from 'react';
import { useMediaRecorder } from './useMediaRecorder';
import { InterviewInfo } from '@/atoms/interview';
import { getVideoDuration } from '../utils/video';

interface UseVideoRecordingParams {
  webcamRef: React.RefObject<any>;
  interviewVideoMutate: Function;
  addInterview: Function;
  interviews: InterviewInfo;
  changeNowInterviewing: Function;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useVideoRecording({
  webcamRef,
  interviewVideoMutate,
  addInterview,
  interviews,
  changeNowInterviewing,
  setIsChecked,
}: UseVideoRecordingParams) {
  const { startRecording, stopRecording } = useMediaRecorder(() => {});

  const handleStartRecording = useCallback(async () => {
    const stream = await startRecording();
    return stream;
  }, [startRecording]);

  const handleStopRecording = useCallback(async () => {
    const webmBlob = await stopRecording();

    if (webmBlob.size === 0) {
      console.warn('빈 blob입니다');
      return;
    }

    const formData = new FormData();
    formData.append('file', webmBlob, 'answer.webm');

    interviewVideoMutate(
      { file: formData, index: interviews.nowInterviewing + 1 },
      {
        onSuccess: () => {
          console.log('비디오 업로드 성공');
          setIsChecked(true);
          changeNowInterviewing(interviews.nowInterviewing + 1);
        },
        onError: (error: any) => {
          console.error('비디오 업로드 실패:', error);
          setIsChecked(false);
        },
      },
    );

    const duration = await getVideoDuration(webmBlob);
    const screenshot = webcamRef.current?.getScreenshot();
    if (screenshot) {
      const byteString = atob(screenshot.split(',')[1]);
      const mimeString = screenshot.split(',')[0].split(':')[1].split(';')[0];

      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      const blob = new Blob([ab], { type: mimeString });
      const blobUrl = URL.createObjectURL(blob);

      addInterview({
        image: blobUrl,
        time: duration,
      });
    }
  }, [
    stopRecording,
    interviewVideoMutate,
    interviews.nowInterviewing,
    addInterview,
    setIsChecked,
    webcamRef,
    changeNowInterviewing,
  ]);

  return {
    handleStartRecording,
    handleStopRecording,
  };
}
