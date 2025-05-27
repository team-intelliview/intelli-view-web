'use client';

import { useCallback, useEffect } from 'react';
import { useMediaRecorder } from './useMediaRecorder';
import { useFFmpegConverter } from './useFFmpegConverter';
import { getVideoDuration } from '../utils/videoUtils';
import { InterviewInfo } from '@/atoms/interview';

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
  const onDataAvailable = useCallback(() => {}, []);

  const { startRecording, stopRecording } = useMediaRecorder(onDataAvailable);
  const { loadFFmpeg, convertWebmToMp4, isReady } = useFFmpegConverter();

  useEffect(() => {
    loadFFmpeg();
  }, [loadFFmpeg]);

  const handleStartRecording = useCallback(async () => {
    const stream = await startRecording();
    return stream;
  }, [startRecording, interviews.nowInterviewing]);

  const handleStopRecording = useCallback(async () => {
    if (!isReady) {
      console.warn('FFmpeg가 아직 준비되지 않았습니다.');
      setIsChecked(false);
      return;
    }

    const webmBlob = await stopRecording();

    if (webmBlob.size === 0) {
      console.warn('빈 blob입니다');
      return;
    }

    try {
      const mp4Blob = await convertWebmToMp4(webmBlob);
      console.log(mp4Blob);
      const formData = new FormData();
      formData.append('file', mp4Blob, 'answer.mp4');

      interviewVideoMutate(
        { file: formData, index: interviews.nowInterviewing },
        {
          onSuccess: () => {
            console.log('비디오 업로드 성공');
            setIsChecked(true);
          },
          onError: (error: any) => {
            console.error('비디오 업로드 실패:', error);
            setIsChecked(false);
          },
        },
      );

      const duration = await getVideoDuration(mp4Blob);
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
      changeNowInterviewing(interviews.nowInterviewing + 1);
    } catch (error) {
      console.error('MP4 변환 및 업로드 실패:', error);
      setIsChecked(false);
    }
  }, [
    stopRecording,
    convertWebmToMp4,
    interviewVideoMutate,
    interviews.nowInterviewing,
    addInterview,
    setIsChecked,
    webcamRef,
  ]);

  return {
    handleStartRecording,
    handleStopRecording,
  };
}
