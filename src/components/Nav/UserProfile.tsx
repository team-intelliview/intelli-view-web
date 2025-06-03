'use client';

import { getUser } from '@/lib/api/auth';
import { User } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (e) {
        console.error('유저 정보를 불러오지 못했습니다:', e);
      }
    }

    fetchUser();
  }, []);

  if (!user) return null;
  return (
    <div className="flex items-center gap-[12px]">
      <Image
        width={36}
        height={36}
        className="rounded-[11.37px] object-cover"
        src={user.profile}
        alt="프로필 이미지"
      />
      <p className="text-heading2 font-medium">{user.name}</p>
    </div>
  );
};

export default UserProfile;
