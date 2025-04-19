import Image from 'next/image';

export default function PhotoSection() {
  return (
    <div className="bg-primary-40 p-auto flex h-full w-[50%] items-center justify-center">
      <Image
        src="/images/main.webp"
        alt="데모 이미지"
        className="absolute"
        width={561}
        height={500}
      />
    </div>
  );
}
