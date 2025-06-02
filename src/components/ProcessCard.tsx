import { REQUEST_STATUS } from '@/constants/api';
import { LogListItem } from '@/types';
import { cn } from '@/utils/string';
import dayjs from 'dayjs';
import Image from 'next/image';

const ProcessCard = ({
  id,
  title,
  status,
  progress,
  totalQuestion,
  completeQuestion,
  updatedAt,
  image,
}: LogListItem) => {
  return (
    <div className="relative h-fit" id={`process-card-${id}`}>
      <div
        className={cn(
          'absolute top-0 left-0 h-full w-[6px] rounded-l-[12px]',
          status === REQUEST_STATUS.IN_PROGRESS
            ? 'bg-primary-100'
            : 'bg-gray-60',
        )}
      />
      <div className="shadow1 border-light flex items-start gap-[24px] rounded-r-[20px] border p-[20px]">
        {image && (
          <Image
            src={image}
            alt="video"
            className="border-light rounded-[12px] border"
            width={140}
            height={90}
          />
        )}
        <div className="flex w-full flex-col gap-[8px]">
          <StatusLabel status={status} />
          <p className="text-headline1 font-semibold text-gray-100">{title}</p>
          {status === REQUEST_STATUS.IN_PROGRESS ? (
            <InProgressDetailInfo
              progress={progress}
              completeQuestion={completeQuestion}
              totalQuestion={totalQuestion}
              updatedAt={updatedAt}
            />
          ) : (
            <CompletedInfo updatedAt={updatedAt} />
          )}
        </div>
      </div>
    </div>
  );
};

const StatusLabel = ({ status }: Pick<LogListItem, 'status'>) => {
  return (
    <div
      className={cn(
        'text-body1 w-fit rounded-[30px] border px-[8px] py-[4px]',
        status === REQUEST_STATUS.IN_PROGRESS
          ? 'text-blue bg-primary-40 border-gray-20'
          : 'bg-gray-10 border-gray-30 text-gray-80',
      )}
    >
      {status === REQUEST_STATUS.IN_PROGRESS ? '진행 중' : '완료'}
    </div>
  );
};

const InProgressDetailInfo = ({
  progress,
  completeQuestion,
  totalQuestion,
  updatedAt,
}: Pick<
  LogListItem,
  'progress' | 'completeQuestion' | 'totalQuestion' | 'updatedAt'
>) => {
  return (
    <div className="gird-col-3 grid gap-[4px]">
      <p className="text-body1 font-regular text-gray-80">
        진행률<span className="ml-[8px]">{progress}%</span>
      </p>
      <p className="text-body1 font-regular text-gray-80">
        질문
        <span className="ml-[8px]">
          {completeQuestion}/{totalQuestion}
        </span>
      </p>
      <p className="text-body1 font-regular text-gray-80">
        응답일
        <span className="ml-[8px]">
          {dayjs(updatedAt).format('YYYY.MM.DD')}
        </span>
      </p>
    </div>
  );
};

const CompletedInfo = ({ updatedAt }: Pick<LogListItem, 'updatedAt'>) => {
  return (
    <p className="text-body1 font-regular text-gray-80">
      제출일
      <span className="ml-[8px]">{dayjs(updatedAt).format('YYYY.MM.DD')}</span>
    </p>
  );
};

export default ProcessCard;
