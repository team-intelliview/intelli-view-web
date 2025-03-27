'use client';

import Image from 'next/image';
import Content from '@/components/Content';
import Card from '@/components/Card';

export default function LoginSection() {
  return (
    <Card className="gap-[38px] p-[36px]">
      <div className="text-heading1 flex flex-col gap-[12px]">
        <p className="font-semibold">로그인 및 회원가입</p>
        <p className="text-gray-90">
          간편 로그인으로 인텔리뷰를 빠르게 시작해봐요!
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        <button
          type="button"
          onClick={() => console.log('kakao')}
          className="border-light flex place-content-center gap-[8px] rounded-[12px] border-2 bg-white px-[12px] py-[12px] hover:cursor-pointer"
        >
          <Image src="/icons/kakao.svg" width={18} height={18} alt="kakao" />
          <p>카카오 계정으로 계속하기</p>
        </button>
        <button
          type="button"
          onClick={() => console.log('google')}
          className="border-light flex place-content-center gap-[8px] rounded-[12px] border-2 bg-white px-[12px] py-[12px] hover:cursor-pointer"
        >
          <Image src="/icons/google.svg" width={18} height={18} alt="google" />
          <p>구글 계정으로 계속하기</p>
        </button>
      </div>
    </Card>
  );
}
