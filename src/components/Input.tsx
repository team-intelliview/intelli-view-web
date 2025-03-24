import { cn } from '@/utils/string';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  maxLength?: number;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({
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
  ...rest
}: InputProps) {
  return (
    <div className={cn('flex flex-col gap-[12px]', className)}>
      {label && (
        <label htmlFor={id} className={cn('text-headline1', labelClassName)}>
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        type="text"
        className={cn(
          'border-gray-20 caret-primary-100 text-headline1 rounded-[12px] border-2 px-[20px] py-[16px] focus:outline-none',
          inputClassName,
        )}
        placeholder={placeholder}
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
