'use client';

import Textbox from '@/components/Textbox';
import Textfield from '@/components/Textfield';
import { COVER_LETTER_MAX_LENGTH } from '@/constants';

interface Props {
  id: number;
  question: string;
  answer: string;
}

export default function QuestionInput({ id, question, answer }: Props) {
  return (
    <Textbox
      id={String(id)}
      placeholder="질문 항목을 입력해주세요."
      label={`질문 ${id}`}
      value={question}
    >
      <Textfield
        placeholder="질문과 답변을 입력해주세요."
        value={answer}
        maxLength={COVER_LETTER_MAX_LENGTH.ANSWER}
        errorMessage="최대 입력 가능 수를 초과하였습니다."
        className="w-full"
      />
    </Textbox>
  );
}
