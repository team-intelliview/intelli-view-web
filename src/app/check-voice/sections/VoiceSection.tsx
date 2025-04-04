'use client';

import { PATH } from '@/constants';
import MovingButton from '@/widgets/MovingButton';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useVoiceVisualizer } from 'react-voice-visualizer';

const VoiceVisualizer = dynamic(
  () => import('react-voice-visualizer').then((mod) => mod.VoiceVisualizer),
  { ssr: false },
);

export default function VoiceSection() {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);
  const [onRec, setOnRec] = useState(false);

  const recorderControls = useVoiceVisualizer({
    onStopRecording: () => setIsChecked(true),
  });
  const { startRecording, stopRecording, recordedBlob } = recorderControls;

  const handleBackClick = () => {
    router.push(PATH.QUESTIONS);
  };
  const handleNextClick = () => {
    router.push(PATH.CHECK_CAMERA);
  };

  const handleMuteToggle = () => {
    setOnRec((prevState) => !prevState);
    if (onRec) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="flex h-full w-[50%] flex-col justify-between gap-[20px]">
      <div className="flex flex-col items-center gap-[20px]">
        <div className="border-gray-20 bg-gray-0 flex w-full flex-col items-center gap-[24px] rounded-[24px] border-2 px-[32px] py-[60px]">
          <p className="text-heading2 text-gray-70 font-medium">
            {isChecked ? '음성을 체크했어요!' : '음성을 기다리고 있어요...'}
          </p>
          {!isChecked ? (
            <VoiceVisualizer
              controls={recorderControls}
              width={152}
              height={60}
              mainBarColor="#3D8DF5"
              speed={1}
              animateCurrentPick={false}
              // onlyRecording={true}
            />
          ) : (
            <Image
              src={'/icons/checked.svg'}
              alt="microphone"
              width={52}
              height={52}
            />
          )}
        </div>
        {/* <button
          onClick={handleMuteToggle}
          className="shadow3 border-light flex items-center gap-[10px] rounded-[30px] border bg-white px-[20px] py-[12px] font-medium text-[#3E5463]"
        >
          <Image
            src={!onRec ? '/icons/microphone_off.svg' : '/icons/waveform.svg'}
            alt="microphone"
            width={30}
            height={30}
          />
          {!onRec ? '음소거 해제' : '음소거'}
        </button> */}
      </div>
      <MovingButton
        className="flex justify-end pt-[20px] pb-[48px]"
        back={handleBackClick}
        isAbleBack={true}
        isAbleNext={true}
        next={handleNextClick}
      />
    </div>
  );
}
