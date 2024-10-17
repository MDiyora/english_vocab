"use client";

import Image from "next/image";
import { useWithSound } from "@/hooks/useWithSound";

export default function Sound() {
  const { playSound } = useWithSound("/sound.mp3");

  const handleButtonClick = (e) => {
    e.stopPropagation();
    playSound();
  };
  return (
    <div className="flex flex-row gap-4">
      <div onClick={handleButtonClick}>
        <Image src="/uk.png" alt="UK flag" width={20} height={20} />
      </div>
      <div>
        <Image src="/us.png" alt="US flag" width={20} height={20} />
      </div>
    </div>
  );
}
