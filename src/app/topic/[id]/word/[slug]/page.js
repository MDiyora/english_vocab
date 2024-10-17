"use client";

import ArrowDown from "@/components/icons/ArrowDown";
import ArrowRight from "@/components/icons/ArrowRight";
import Cubes from "@/components/icons/cubes";
import Sound from "@/components/common/Sound";
import { useState } from "react";

export default function Word() {
  const [isOpen, setOpen] = useState(false);
  function handleMoreOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="mx-auto flex justify-center object-center px-4 py-24 lg:max-w-3xl w-full">
      <div className="w-full flex justify-center object-center flex-col gap-12 sm:gap-16">
        <div className="w-full mx-auto flex flex-col gap-6 z-40">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sky-500 dark:text-sky-400 font-semibold text-sm z-40">
                Natural landscapes
              </p>
              <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Forest
              </h1>
              <p className=" text-lg text-slate-700 dark:text-slate-400">
                A large area covered chiefly with trees and undergrowth.
              </p>
              <Sound />
              <p className="text-slate-700 dark:text-slate-400 italic">noun</p>
            </div>

            <div className="">
              {!isOpen && (
                <div className="cursor-pointer" onClick={handleMoreOpen}>
                  <ArrowRight />
                </div>
              )}
              {isOpen && (
                <div className="cursor-pointer" onClick={handleMoreOpen}>
                  <ArrowDown />
                </div>
              )}
            </div>

            {isOpen && (
              <div className="bg-slate-800/50  p-8 rounded-2xl">
                <div className="flex flex-col gap-4">
                  <h3 className="inline-block text-lg font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                    Usage in Sentences
                  </h3>
                  <p className="text-slate-700 dark:text-slate-400">
                    We took a hike through the forest to enjoy the fresh air.
                  </p>
                  <p className="text-slate-700 dark:text-slate-400">
                    A dense forest blocked our path.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="inline-block text-lg font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                    Synonyms
                  </h3>
                  <p className="text-slate-700 dark:text-slate-400">
                    woods, jungle, grove
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="inline-block text-lg font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                    Antonyms
                  </h3>
                  <p className="text-slate-700 dark:text-slate-400">
                    desert, plain
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="absolute z-30 inset-0 before:absolute before:content-['']
          dark:bg-[url('/shape_dark.svg')] bg-[url('/shape.svg')] bg-repeat bg-bottom bg-contain"
        />
        <div className="absolute inset-0 z-10">
          <Cubes />
        </div>
      </div>
    </div>
  );
}
