import { cn } from '@/utils/string';
import { TextareaHTMLAttributes } from 'react';
import Image from 'next/image';

interface TextboxProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  maxLength?: number;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  editButtonClick?: () => void;
}

export default function Textbox({
  id,
  label,
  value,
  labelClassName,
  inputClassName,
  errorMessage,
  maxLength,
  onChange,
  placeholder,
  className,
  editButtonClick,
  ...rest
}: TextboxProps) {
  return (
    <div
      className={cn(
        'border-light flex flex-col items-start gap-[12px] rounded-[20px] border px-[28px] pt-[24px] pb-[32px]',
        className,
      )}
    >
      <div className="flex w-full justify-between">
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-body1 bg-gray-0 border-light text-gray-70 rounded-[8px] border px-[8px] py-[4px]',
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        {editButtonClick && (
          <button
            className="h-fit w-fit hover:cursor-pointer"
            onClick={editButtonClick}
          >
            <Image
              src="/icons/pencil_02.svg"
              alt="edit"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className={cn(
          'border-gray-40 !text-gray-80 text-headline1 caret-primary-100 h-fit w-full resize-none border-b font-medium focus:outline-none',
          inputClassName,
        )}
        placeholder={placeholder}
        {...rest}
      />
      <p className="text-red text-body1">{errorMessage}</p>
    </div>
  );
}
