import Button from "@/components/common/Button";
import Link from "next/link";
import Topics from "@/components/homepage/Topics";

export default function Home() {
  return (
    <main>
      <div className="relative h-[90vh] bg-gradient-to-b from-transparent to-black/5">
        <div className="max-w-5xl mx-auto z-40 pt-20 sm:pt-24 lg:pt-32 flex flex-col items-center gap-10 ">
          <h1 className="z-40 dark:text-white mr-auto ml-auto font-extrabold text-center text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-normal">
            Find the right words, <br /> wherever you go.
          </h1>
          <p className="text-slate-600 z-40 text-center dark:text-slate-400 text-lg">
            Learn <span className="text-[#38BDF8]">vocabulary </span>
            effortlessly and perfect your <br /> understanding of global
            <span className="text-[#38BDF8]"> accents</span>.
          </p>
          <Link href="/#topic" className="z-50">
            <Button>Get started</Button>
          </Link>
        </div>
        <div
          className="absolute z-30 inset-0 before:absolute before:content-['']
          dark:bg-[url('/shape_dark.svg')] bg-[url('/shape.svg')] bg-repeat bg-bottom bg-contain"
        />
        <div className="absolute inset-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 800"
            opacity="0.86"
          >
            <defs>
              <filter
                id="bbblurry-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="102"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                rx="63"
                ry="65"
                cx="389.3258017424813"
                cy="354.3629993444327"
                fill="#38bdf8ff"
              ></ellipse>
              <ellipse
                rx="63"
                ry="65"
                cx="602.7278805001647"
                cy="222.3913015113795"
                fill="#f472b6ff"
              ></ellipse>
            </g>
          </svg>
        </div>
      </div>

      <Topics />
    </main>
  );
}
