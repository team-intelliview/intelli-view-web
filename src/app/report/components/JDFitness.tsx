import FeedbackCard from '@/widgets/FeedbackCard';

export default function JDFitness() {
  return (
    <FeedbackCard
      title="JD 적합도"
      subTitle={
        <p className="text-body1 font-medium text-[#C4C5C5]">
          <span className="text-heading2 text-gray-80 font-semibold">80% </span>
          / 100
        </p>
      }
      describe={`채용공고를 바탕으로 JD 적합도를 도출해요`}
      content={
        <div className="mt-[24px] flex flex-col gap-[12px]">
          <progress
            className="progress progress-primary-100 w-full"
            value="80"
            max="100"
          />
          <div className="flex justify-between">
            <p>0%</p>
            <p>100%</p>
          </div>
          <div className="bg-gray-0 text-gray-80 rounded-[12px] p-[20px]">
            <p className="text-start font-medium">
              회사에서 요구하는 뭉제해결 능력에 대한 경험이 면접 답변에서 잘
              드러났습니다. 특히 캐치테이블에서 광고센터 구축 경험이 문제 해결
              능력에 대한 역량을 잘 담은 것으로 평가되었어요.
            </p>
          </div>
        </div>
      }
    />
  );
}
