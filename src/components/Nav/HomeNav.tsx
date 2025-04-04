'use client';

import Image from 'next/image';
import Navigation from './Navigation';
import { PATH } from '@/constants';
import Link from 'next/link';
import BreadCrumb from '../BreadCrumb';

interface HomeNavProps {
  breadCrumb?: boolean;
}

export default function HomeNav({ breadCrumb = false }: HomeNavProps) {
  return (
    <Navigation className="absolute flex w-full items-center justify-between px-[60px]">
      <Link href={PATH.HOME}>
        <Image
          src="/logo.svg"
          alt="logo"
          height={24}
          width={24}
          className="h-[24px] w-auto"
          priority
        />
      </Link>
      {breadCrumb && <BreadCrumb />}
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
