"use client";

import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWithSound } from "@/hooks/useWithSound";

export default function WordFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { playSound } = useWithSound("/sound.mp3");

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    playSound();
  };

  return (
    <div className="h-72 [perspective:1000px] z-40" onClick={handleFlip}>
      <div
        className={`relative h-full w-full shadow-xl transition-all duration-500 
          [transform-style:preserve-3d] rounded-xl bg-slate-50/80 p-6 
          dark:bg-slate-800/80 dark:highlight-white/5 
           cursor-pointer ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          <div className="absolute w-full inset-0 flex flex-col items-center justify-center">
            <p className="max-w-80 text-2xl italic font-semibold text-slate-900 dark:text-slate-50 group-hover:text-sky-500 dark:group-hover:text-sky-400">
              Island
            </p>
            <div className="flex flex-row gap-4">
              <div onClick={handleButtonClick}>
                <Image src="/uk.png" alt="UK flag" width={20} height={20} />
              </div>
              <div>
                <Image src="/us.png" alt="US flag" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl text-slate-500 dark:text-slate-400  px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-lg text-pretty text-center mb-4">
              A piece of land surrounded by water
            </p>
            <Link href={`/topic/1/word/island`} className="inline-flex">
              <Button>More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
