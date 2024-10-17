import FlipCard from "./FlipCard";

export default function Topics() {
  return (
    <div id="topic" className="bg-white dark:bg-slate-900">
      <div className="mx-auto z-50 flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl w-full">
        <div className="w-full flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl z-40 dark:text-white text-center font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Topics
          </h2>

          <div className="w-full mx-auto grid lg:grid-cols-3 gap-10">
            <FlipCard />
          </div>
        </div>
      </div>
    </div>
  );
}
