"use client";

import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 backdrop-blur-lg text-slate-700 dark:text-slate-400 w-full flex flex-row gap-10 items-center justify-center text-lg font-semibold py-6 border-b border-b-slate-900/10 dark:border-b-slate-50/[0.06]">
      <Link href="/" className={`relative group`}>
        Home
        <span
          className={`${
            pathname === "/"
              ? ""
              : "absolute left-1/2 bottom-0 h-[2px] w-0 bg-sky-500 dark:bg-sky-400 transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full "
          }`}
        />
      </Link>
      <Link href="/#topic" className={`relative group`}>
        Topics
        <span
          className={`${
            pathname === "/#topic"
              ? ""
              : "absolute left-1/2 bottom-0 h-[2px] w-0 bg-sky-500 dark:bg-sky-400 transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full "
          }`}
        />
      </Link>
      <ThemeToggler />
    </div>
  );
}
