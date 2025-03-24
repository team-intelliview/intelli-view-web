import { cn } from '@/utils/string';
import { TextareaHTMLAttributes } from 'react';

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
  onChange,
  placeholder,
  className,
  ...rest
}: TextfieldProps) {
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
        value={value}
        onChange={onChange}
        className={cn(
          'border-light caret-primary-100 min-h-[228px] resize-none rounded-[12px] border-2 px-[20px] pt-[24px] pb-[32px] focus:outline-none',
          textareaClassName,
        )}
        {...rest}
      />
      <div className="flex justify-between">
        <p className="text-red text-body1">{errorMessage}</p>
        {maxLength && (
          <div className="text-body1 flex whitespace-pre">
            <span>{String(value).length} / </span>
            <span className="text-gray-60">{maxLength}자</span>
          </div>
        )}
      </div>
    </div>
  );
}
