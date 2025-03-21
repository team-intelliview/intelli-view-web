interface TooltipProps {
  title: string;
  content: string;
}

export default function Tooltip({ title, content }: TooltipProps) {
  return (
    <div className="text-body2 shadow2 flex w-[360px] flex-col gap-[4px] rounded-[12px] p-[24px]">
      <p className="text-gray-90 font-semibold">{title}</p>
      <p className="text-gray-80 whitespace-pre-wrap break-keep">{content}</p>
    </div>
  );
}
