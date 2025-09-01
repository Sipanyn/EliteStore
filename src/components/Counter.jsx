function Counter() {
  return (
    <div className="flex flex-row items-center gap-4 pt-2 pb-2 pl-3 pr-3 rounded-md bg-slate-200/60">
      <p className="text-gray-500 cursor-pointer border-r-1 pr-3 border-gray-400">
        -
      </p>

      <p className="font-bold">1</p>

      <p className="text-gray-500 cursor-pointer border-l-1 pl-3 border-gray-400">
        +
      </p>
    </div>
  );
}

export default Counter;
