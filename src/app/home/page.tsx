'use client';

import Button from '@/components/Button';
import PageLayout from '../PageLayout';
import Tab from '@/components/Tab';
import Chip from '@/components/Chip';
import Input from '@/components/Input';
import { useState } from 'react';
import Textfield from '@/components/Textfield';
import Textbox from '@/components/Textbox';
import ProcessCard from '@/components/ProcessCard';
import Tooltip from '@/components/Tooltip';
import ModuleButton from '@/components/ModuleButton';
import Dropdown from '@/components/Dropdown';

export default function Home() {
  const [input, setInput] = useState('');
  const [textField, setTextField] = useState('');
  const [textbox, setTextbox] = useState(
    'UX R&D의 역할이 장기적인 관점에서 UX/UI를 탐색하는 것인데, 당신이 생각하는 좋은 UX란 무엇인가요?',
  );

  return (
    <PageLayout className="flex min-h-screen flex-col gap-12 overflow-hidden p-40">
      <div className="flex">
        oo
        <Button text="다음" size="sm" />
        <Button text="다음" disabled />
        <Button text="다음" variant="stop" />
        <Button text="다음" variant="start" />
      </div>
      <ModuleButton icon="🏢" text="대면으로 진행해요" />
      <div className="flex">
        <Tab text="홈" />
        <Tab text="홈" clicked />
      </div>
      <div className="flex">
        <Chip state="complete" text="05:35" />
        <Chip state="inProgress" text="05:35" />
        <Chip state="before" text="05:35" />
      </div>
      <div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="회사 명"
          placeholder="지원하는 기업의 회사 명을 입력해주세요"
          errorMessage="최대 입력 가능 수를 초과하였습니다."
          maxLength={20}
        />
      </div>
      <div>
        <Textfield
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
          errorMessage="최대 입력 가능 수를 초과하였습니다."
          maxLength={20}
          label="경력"
        />
      </div>
      <div>
        <Textbox
          value={textbox}
          onChange={(e) => setTextbox(e.target.value)}
          errorMessage="텍스트를 입력해주세요"
          label="질문 1"
          editButtonClick={() => setTextbox('')}
        />
      </div>
      <div className="flex gap-12">
        <ProcessCard
          inProgress={true}
          title="ㅜㅜ"
          progress={30}
          question="7/10"
          response="2055.03.11"
          image="/example.webp"
        />
        <ProcessCard inProgress={false} title="ㅜㅜ" submit="2055.03.11" />
      </div>
      <Tooltip
        title="종합 답변 완성도"
        content={`논리성, 명확성, 연관성을 기준으로 측정합니다.
논리성: 주장에 대한 논리가 있는지
명확성: 답변이 모호하지 않고 핵심이 분명한지
연관성: 답변이 질문과 직접적으로 관련 있는지`}
      />
      <Dropdown title="1. 증권 서비스의 UX를 설계할 때 가장 중요한 요소는 무엇이라고 생각하시나요?">
        <p>
          증권 서비스의 UX를 설계할 때 가장 중요한 요소는 사용자의 신뢰와
          접근성이라고 생각합니다. 증권 서비스는 사용자의 자산과 직결되기
          때문에, 신뢰할 수 있는 환경을 제공하는 것이 무엇보다 중요합니다. 이를
          위해 명확한 정보 전달, 직관적인 인터페이스, 안정적인 서비스 운영이
          필수적입니다. 사용자가 거래 과정에서 불안함을 느끼지 않도록 리스크를
          명확하게 설명하고, 거래 내역을 투명하게 제공하는 것이 신뢰를 높이는
          핵심 요소가 될 수 있습니다.
        </p>
      </Dropdown>
    </PageLayout>
  );
}
