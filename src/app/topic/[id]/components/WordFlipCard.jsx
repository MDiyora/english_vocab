"use client";

import Button from "@/components/common/Button";
import Link from "next/link";
import { useState } from "react";

export default function WordFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip state on click
  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="h-72 [perspective:1000px] z-40"
      onClick={handleFlip} // Flip on click
    >
      <div
        className={`relative h-full w-full shadow-xl transition-all duration-500 
          [transform-style:preserve-3d] rounded-xl bg-slate-50/80 p-6 
          dark:bg-slate-800/80 dark:highlight-white/5 
           cursor-pointer ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          <div className="absolute w-full inset-0 flex items-center justify-center">
            <p className="max-w-80 text-2xl italic font-semibold text-slate-900 dark:text-slate-50 group-hover:text-sky-500 dark:group-hover:text-sky-400">
              Island
            </p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl text-slate-500 dark:text-slate-400  px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-lg text-pretty text-center mb-4">
              A piece of land surrounded by water
            </p>
            <Link href={`/topic/1`} className="inline-flex">
              <Button>More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
