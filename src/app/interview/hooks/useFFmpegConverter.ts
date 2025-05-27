'use client';

import { useCallback, useRef, useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

export function useFFmpegConverter() {
  const ffmpegRef = useRef<FFmpeg | null>(null);
  const [isReady, setIsReady] = useState(false);

  const loadFFmpeg = useCallback(async () => {
    if (!ffmpegRef.current) {
      ffmpegRef.current = new FFmpeg();
    }

    if (!ffmpegRef.current.loaded) {
      await ffmpegRef.current.load();
      setIsReady(true);
    }
  }, []);

  const convertWebmToMp4 = useCallback(
    async (webmBlob: Blob): Promise<Blob> => {
      if (!ffmpegRef.current || !isReady) {
        throw new Error(
          'FFmpeg가 로드되지 않았습니다. 먼저 loadFFmpeg()를 호출하세요.',
        );
      }

      const ffmpeg = ffmpegRef.current;

      await ffmpeg.writeFile('input.webm', await fetchFile(webmBlob));
      await ffmpeg.exec(['-i', 'input.webm', 'output.mp4']);
      const data = await ffmpeg.readFile('output.mp4');

      return new Blob([data], { type: 'video/mp4' });
    },
    [isReady],
  );

  return { isReady, loadFFmpeg, convertWebmToMp4 };
}
