import Image from 'next/image';

export default function TitleBox() {
  return (
    <div className="flex w-[50%] items-center gap-[20px] pt-[48px]">
      <Image
        src="icons/paper.svg"
        width={32}
        height={32}
        alt="question"
        className="bg-gray-0 border-gray-20 size-[54px] rounded-[10.62px] border-[1.77px] p-[8px]"
      />
      <div className="flex w-full flex-col gap-[4px]">
        <h1 className="text-title3 font-semibold">자기소개서 작성</h1>
        <p className="text-heading2 text-gray-80">
          기업의 자기소개서 질문과 답변을 작성해보세요
        </p>
      </div>
    </div>
  );
}
