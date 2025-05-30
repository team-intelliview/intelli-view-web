import { useCallback, useRef } from 'react';

export function useMediaRecorder(onDataAvailable: (event: BlobEvent) => void) {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const recordedBlobsRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = useCallback(async () => {
    const userStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    streamRef.current = userStream;
    recordedBlobsRef.current = [];

    const recorder = new MediaRecorder(userStream, {
      mimeType: 'video/webm',
    });

    recorder.ondataavailable = (event: BlobEvent) => {
      if (event.data && event.data.size > 0) {
        recordedBlobsRef.current.push(event.data);
      }
      if (onDataAvailable) {
        onDataAvailable(event);
      }
    };

    recorderRef.current = recorder;
    recorder.start();

    return userStream;
  }, [onDataAvailable]);

  const stopRecording = useCallback(() => {
    return new Promise<Blob>((resolve) => {
      const recorder = recorderRef.current;
      const userStream = streamRef.current;

      if (!recorder) {
        resolve(new Blob());
        return;
      }

      recorder.onstop = () => {
        const webmBlob = new Blob(recordedBlobsRef.current, {
          type: 'video/webm',
        });

        // 스트림 종료
        userStream?.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        recorderRef.current = null;
        recordedBlobsRef.current = [];

        resolve(webmBlob);
      };

      recorder.stop();
    });
  }, []);

  return {
    startRecording,
    stopRecording,
  };
}
