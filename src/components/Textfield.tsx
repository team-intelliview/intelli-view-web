'use client';

import { cn } from '@/utils/string';
import { TextareaHTMLAttributes, useState } from 'react';

interface TextfieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelClassName?: string;
  textareaClassName?: string;
  maxLength?: number;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
}

export default function Textfield({
  id,
  label,
  value,
  labelClassName,
  textareaClassName,
  errorMessage,
  maxLength,
  placeholder,
  className,
  ...rest
}: TextfieldProps) {
  const [text, setText] = useState(value || '');
  const handleTextfieldChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={cn('flex flex-col gap-[8px]', className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn('text-headline1 font-medium', labelClassName)}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={text}
        onChange={(e) => handleTextfieldChange(e)}
        placeholder={placeholder}
        className={cn(
          'border-light caret-primary-100 min-h-[228px] resize-none rounded-[12px] border-2 px-[20px] pt-[24px] pb-[32px] focus:outline-none',
          textareaClassName,
          !text && 'bg-gray-0',
        )}
        {...rest}
      />
      <div className="flex justify-between">
        {String(text).length > maxLength && (
          <p className="text-red text-body1">{errorMessage}</p>
        )}
        {maxLength && (
          <div className="text-body1 flex whitespace-pre">
            <span>{String(text).length} / </span>
            <span className="text-gray-60">{maxLength}자</span>
          </div>
        )}
      </div>
    </div>
  );
}
