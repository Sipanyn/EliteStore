function NoMaching() {
  return (
    <div className="flex flex-col justify-center items-center gap-2.5">
      <p className="text-gray-400">No products found matching your filters.</p>
      <p className="rounded-md hover:bg-slate-200/60 border-1 border-gray-200 w-fit cursor-pointer p-2">
        Clear Filters
      </p>
    </div>
  );
}

export default NoMaching;
