'use client';

import Textbox from '@/components/Textbox';
import Textfield from '@/components/Textfield';
import { COVER_LETTER_MAX_LENGTH } from '@/constants';

interface Props {
  id: number;
  question: string;
  answer: string;
  onChange: (field: 'question' | 'answer', value: string) => void;
}

export default function QuestionInput({
  id,
  question,
  answer,
  onChange,
}: Props) {
  return (
    <Textbox
      id={String(id)}
      placeholder="질문 항목을 입력해주세요."
      label={`질문 ${id}`}
      value={question}
      onChange={(e) => onChange('question', e.target.value)}
    >
      <Textfield
        placeholder="답변을 입력해주세요."
        value={answer}
        maxLength={COVER_LETTER_MAX_LENGTH.ANSWER}
        errorMessage="최대 입력 가능 수를 초과하였습니다."
        className="w-full"
        onChange={(e) => onChange('answer', e.target.value)}
      />
    </Textbox>
  );
}
