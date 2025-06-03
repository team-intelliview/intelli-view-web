import { REQUEST_OPTION } from '@/constants';
import { useContent } from '@/hooks';
import { RequestOption } from '@/types';
import { cn } from '@/utils';
import MessageBlink from '@assets/icons/message_blink.svg';
import PaperBlink from '@assets/icons/paper_blink.svg';
import Plus from '@assets/icons/plus.svg';

const EmptyContent = ({ type }: { type: RequestOption }) => {
  const { changeType } = useContent();

  const iconImage =
    type === REQUEST_OPTION.INTERVIEW ? (
      <MessageBlink width={48} height={48} />
    ) : (
      <PaperBlink width={48} height={48} />
    );

  const emptyMessage =
    type === REQUEST_OPTION.INTERVIEW
      ? `진행된 면접이 없습니다.
  모의 면접을 진행해보세요.`
      : `작성된 자기소개서가 없습니다.
  자기소개를 작성해보세요.`;

  const buttonText =
    type === REQUEST_OPTION.INTERVIEW ? '면접 진행하기' : '작성 진행하기';

  return (
    <div
      className={cn(
        'py-auto flex h-full flex-col place-content-center items-center gap-[20px] text-center',
      )}
    >
      {iconImage}
      <p className="text-headline1 whitespace-pre-wrap">{emptyMessage}</p>
      <button
        type="button"
        className="flex gap-4 px-[12px] py-[6px] hover:cursor-pointer"
        onClick={() => changeType(type)}
      >
        <Plus width={20} height={20} />
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default EmptyContent;
