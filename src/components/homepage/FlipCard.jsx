import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";

export default function FlipCard() {
  return (
    <div className="group h-80 [perspective:1000px] z-40">
      <div className="relative h-full w-full rounded-3xl shadow-xl transition-all duration-500 bg-slate-50 dark:bg-slate-800/50 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          <Image
            className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
            src="/natural_landscapes.jpg"
            alt="natural_landscapes"
            width={320}
            height={320}
          />
          <div className="absolute w-full inset-0 flex items-center justify-center top-0">
            <p className="bg-white max-w-80 dark:bg-slate-900 text-2xl dark:text-slate-50">
              Natural landscapes
            </p>
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 px-12 text-center  [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-lg text-pretty text-center mb-4">
              Is it ‘forest’ or ‘woods’?
            </p>
            <Link href={`/topic/1`} className="inline-flex">
              <Button>Find out</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
