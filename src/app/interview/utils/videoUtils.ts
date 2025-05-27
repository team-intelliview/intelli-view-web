import { formatDuration } from '@/utils';

export function getVideoDuration(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    if (blob.size === 0) {
      resolve('00:00');
      return;
    }
    const video = document.createElement('video');
    const url = URL.createObjectURL(blob);

    video.preload = 'metadata';
    video.src = url;

    video.onloadedmetadata = () => {
      if (video.duration === Infinity) {
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
      URL.revokeObjectURL(url);
      resolve('00:00');
    };
  });
}
