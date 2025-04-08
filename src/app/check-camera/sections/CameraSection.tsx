'use client';

import { MODAL, PATH } from '@/constants';
import { useModal } from '@/hooks';
import MovingButton from '@/widgets/MovingButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Webcam from 'react-webcam';

export default function CameraSection() {
  const router = useRouter();
  const { openModal } = useModal();

  const [isUsingCamera, setIsUsingCamera] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleMuteToggle = () => {
    setIsUsingCamera((prev) => !prev);
  };

  const handleBackClick = () => {};
  const handleNextClick = () => {
    openModal(MODAL.FINISH_CHECK);
  };

  return (
    <div className="flex h-full w-[50%] flex-col justify-between gap-[20px]">
      <div className="flex flex-col items-center gap-[20px]">
        {isUsingCamera ? (
          !isChecked && (
            <Webcam
              id="checkCamera"
              className="rounded-[24px]"
              audio={false}
              screenshotFormat="image/jpeg"
              width={673}
              mirrored
            />
          )
        ) : (
          <div className="bg-gray-20 h-[504px] w-[673px] place-content-center rounded-[24px] text-center">
            <p className="text-gray-70 font-medium">
              시작을 켜서 위치를 체크해주세요
            </p>
          </div>
        )}
        <button
          onClick={handleMuteToggle}
          className="shadow3 border-light flex items-center gap-[10px] rounded-[30px] border bg-white px-[20px] py-[12px] font-medium text-[#3E5463]"
        >
          {!isUsingCamera ? '카메라 시작' : '중지'}
        </button>
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
