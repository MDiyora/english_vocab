export default function Button({ children }) {
  return (
    <button className="bg-sky-500 flex-auto z-40 shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700">
      {children}
    </button>
  );
}
