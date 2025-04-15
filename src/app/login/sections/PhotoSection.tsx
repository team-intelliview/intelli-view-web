import Image from 'next/image';

export default function PhotoSection() {
  return (
    <div className="bg-primary-40 p-auto w-[50%] h-full flex items-center justify-center">
      <Image
        src="/main.webp"
        alt="데모 이미지"
        className="absolute"
        width={561}
        height={500}
      />
    </div>
  );
}
