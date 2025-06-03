import { JdFitItem } from '@/types';
import FeedbackCard from '@/widgets/FeedbackCard';

export default function JDFitness({ rate, description }: JdFitItem) {
  return (
    <FeedbackCard
      title="JD 적합도"
      subTitle={
        <p className="text-body1 font-medium text-[#C4C5C5]">
          <span className="text-heading2 text-gray-80 font-semibold">
            {rate}%{' '}
          </span>
          / 100
        </p>
      }
      describe={`채용공고를 바탕으로 JD 적합도를 도출해요`}
      content={
        <div className="mt-[24px] flex flex-col gap-[12px]">
          <progress
            className="progress progress-primary-100 w-full"
            value={rate}
            max="100"
          />
          <div className="flex justify-between">
            <p>0%</p>
            <p>100%</p>
          </div>
          <div className="bg-gray-0 text-gray-80 rounded-[12px] p-[20px]">
            <p className="text-start font-medium">{description}</p>
          </div>
        </div>
      }
    />
  );
}
