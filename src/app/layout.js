import "./globals.css";

import { DM_Mono } from "next/font/google";
import Header from "@/components/common/Header";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "English vocab",
  description:
    "Website to boost English vocabulary alongside differentiating American and British accents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.className} bg-slate-50 dark:bg-slate-900 scroll-smooth`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
