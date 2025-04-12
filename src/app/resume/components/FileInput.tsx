'use client';

import { useRef } from 'react';

export default function FileInput() {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (!fileRef.current) return;
        console.log(file);
      };
    }
  };

  return (
    <div className="flex flex-col">
      <input
        ref={fileRef}
        type="file"
        className="file-input w-full"
        onChange={(e) => handleChangeFile(e)}
      />
    </div>
  );
}
