import Chip from '@/components/Chip';
import { useInterviewState } from '@/hooks/useInterview';
import AnnotationTyping from '@assets/icons/annotation_typing.svg';
import List from '@assets/icons/list.svg';

interface ProcessLogProps {
  entireCnt: number;
}

export default function ProcessLog({ entireCnt }: ProcessLogProps) {
  const { interviews } = useInterviewState();

  return (
    <div className="border-gray-20 flex w-full flex-col gap-[20px] rounded-[16px] border bg-white px-[20px] py-[24px]">
      <p className="text-gray-90 font-semibold">면접 진행 상황</p>
      <div className="bg-primary-40 border-light flex w-fit gap-[10px] rounded-[12px] border px-[12px] py-[8px]">
        <p className="flex items-center gap-[8px]">
          <AnnotationTyping width={20} height={20} />
          {interviews.logList.length}개 완료
        </p>
        <hr />
        <p className="flex items-center gap-[8px]">
          <List width={20} height={20} />총 질문 {entireCnt}개
        </p>
      </div>
      <ul className="timeline timeline-vertical timeline-compact">
        {Array.from({ length: entireCnt }).map((_, index) => {
          const logItem = interviews.logList[index] || { time: '', image: '' };
          const { time, image } = logItem;

          return (
            <li key={index}>
              {index != 0 && <hr />}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end ml-[24px] flex w-fit items-center gap-[32px]">
                {image ? (
                  <img
                    src={image}
                    width={112}
                    height={65}
                    alt="면접 사진"
                    className="rounded-[8px] object-cover"
                  />
                ) : (
                  <div className="bg-gray-70/20 h-[65px] w-[112px] rounded-[8px]" />
                )}
                <Chip
                  text={time || '00:00'}
                  state={!time ? 'before' : 'complete'}
                />
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
