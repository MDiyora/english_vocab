import WordFlipCard from "./components/WordFlipCard";

export default function page() {
  return (
    <div className="h-[92vh] mx-auto flex justify-center object-center px-4 pt-10 lg:max-w-7xl w-full">
      <div
        className="absolute inset-0 before:absolute before:content-['']
          bg-[url('/natural_landscapes.jpg')] bg-cover bg-no-repeat opacity-50"
      />
      <div className="w-full flex justify-center object-center flex-col gap-12 sm:gap-16">
        <div className="w-full mx-auto grid lg:grid-cols-3 gap-10 overflow-scroll">
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
          <WordFlipCard />
        </div>
      </div>
    </div>
  );
}
