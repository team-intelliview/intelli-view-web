import Navigation from '../Navigation';
import Image from 'next/image';

export default function HomeNav() {
  return (
    <Navigation className="flex place-content-end items-center px-[60px]">
      <div className="flex gap-[12px]">
        <Image
          width={36}
          height={36}
          className="rounded-[11.37px] object-cover"
          src="/example.webp"
          alt="프로필 이미지"
        />
        <p className="text-heading1 font-semibold">김지은</p>
      </div>
    </Navigation>
  );
}
