'use client';

import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Button from '@/components/Button';
import {
  useInterview,
  useInterviewState,
  useNowInterviewing,
} from '@/hooks/useInterview';
import { formatDuration } from '@/utils';

export default function VideoSection() {
  const { addInterview, resetInterview } = useInterview();
  const { changeNowInterviewing } = useNowInterviewing();
  const { nowInterviewing } = useInterviewState();

  const webcamRef = useRef<Webcam | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const recordedBlobsRef = useRef<Blob[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isInterviewing, setIsInterviewing] = useState(false);

  const handleInterviewReset = () => {
    resetInterview();
    changeNowInterviewing(0);
  };

  const handleDataAvailable = useCallback((event: BlobEvent) => {
    if (event.data && event.data.size > 0) {
      recordedBlobsRef.current.push(event.data);
    }
  }, []);

  const getVideoDuration = (blob: Blob): Promise<string> => {
    return new Promise((resolve) => {
      if (blob.size === 0) {
        console.warn('빈 blob입니다.');
        resolve('00:00');
        return;
      }
      console.log('blob:', blob);
      const video = document.createElement('video');
      const url = URL.createObjectURL(blob);

      video.preload = 'metadata';
      video.src = url;

      video.onloadedmetadata = () => {
        if (video.duration === Infinity) {
          // WebM처럼 duration 정보가 파일 끝에 있는 포맷은 브라우저가 duration을 Infinity로 설정하는 경우가 있어서 재생 위치를 큰 값으로 강제 이동
          video.currentTime = 1e101;
          video.ontimeupdate = () => {
            video.ontimeupdate = null;
            const realDuration = video.duration;
            if (!isFinite(realDuration) || isNaN(realDuration)) {
              resolve('00:00');
            } else {
              resolve(formatDuration(realDuration));
            }
            URL.revokeObjectURL(url);
          };
        } else {
          resolve(formatDuration(video.duration));
          URL.revokeObjectURL(url);
        }
      };

      video.onerror = () => {
        console.error('비디오 로딩 오류');
        URL.revokeObjectURL(url);
        resolve('00:00');
      };
    });
  };

  const handleStartRecording = useCallback(async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(userStream);
      recordedBlobsRef.current = [];

      const recorder = new MediaRecorder(userStream, {
        mimeType: 'video/webm',
      });

      recorder.ondataavailable = handleDataAvailable;
      recorderRef.current = recorder;
      recorder.start();
    } catch (error) {
      console.error('카메라 접근 실패:', error);
    }
  }, [handleDataAvailable]);

  const handleStopRecording = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder) {
      console.error('Recorder가 존재하지 않아요');
      return;
    }

    recorder.onstop = async () => {
      const blob = new Blob(recordedBlobsRef.current, { type: 'video/webm' });

      if (blob.size === 0) {
        console.warn('빈 blob입니다');
        return;
      }

      const duration = await getVideoDuration(blob);
      const screenshot = webcamRef.current?.getScreenshot();

      addInterview({
        image: screenshot,
        time: duration,
      });
    };

    recorder.stop();
    stream?.getTracks().forEach((track) => track.stop());
    changeNowInterviewing(nowInterviewing + 1);
  }, [stream, addInterview]);

  const handleRecording = async () => {
    if (!isInterviewing) {
      await handleStartRecording();
    } else {
      handleStopRecording();
    }
    setIsInterviewing((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full flex-col place-items-center gap-[40px]">
      <Webcam
        ref={webcamRef}
        id="interviewCamera"
        className="rounded-[24px]"
        audio={false}
        screenshotFormat="image/jpeg"
        mirrored
        videoConstraints={{ width: 1280, height: 720 }}
      />
      <Button
        onClick={handleRecording}
        text={isInterviewing ? '답변 종료' : '답변 시작'}
        variant={isInterviewing ? 'stop' : 'start'}
      />
      <Button text="면접 초기화" onClick={handleInterviewReset} />
    </div>
  );
}
