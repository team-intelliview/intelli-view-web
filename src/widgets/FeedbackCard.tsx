'use client';

import Card from '@/components/Card';
import Image from 'next/image';
import { useState } from 'react';
import HelpCard from './HelpCard';

interface HelpModalProps {
  title: string;
  describe: string;
}

interface Props extends HelpModalProps {
  subTitle: React.ReactNode;
  content: React.ReactNode;
}

export default function FeedbackCard({
  title,
  subTitle,
  describe,
  content,
}: Props) {
  const [isDescribeModalOpen, setIsDescribeModalOpen] = useState(false);

  return (
    <Card>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-[4px]">
          <p className="text-heading2 text-gray-90 font-semibold">{title}</p>
          <div className="relative">
            <button className="items-center flex hover:cursor-pointer" onClick={() => setIsDescribeModalOpen((prev) => !prev)}>
              <Image src="/icons/help.svg" width={20} height={20} alt="help" />
            </button>
            {isDescribeModalOpen && (
              <HelpCard title={title} describe={describe} />
            )}
          </div>
        </div>
        {subTitle}
      </div>
      {content}
    </Card>
  );
}
