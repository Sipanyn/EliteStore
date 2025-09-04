import { useEffect, useRef, useState } from "react";

function SortBy({ sortValue, SetSortValue }) {
  const [opensort, setOpenSort] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSort(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className=" flex flex-row items-center gap-2 bxs:gap-9 border-1 border-gray-200 hover:bg-slate-200/60 rounded-md cursor-pointer pt-1 pb-1 pl-2.5 pr-2.5 relative select-none w-fit z-5">
      <div
        onClick={() => setOpenSort((pre) => !pre)}
        className="flex flex-row items-center gap-1.5"
      >
        <svg className="size-5 text-black hidden sm:block">
          <use href="../sprite.svg#upDown_icon"></use>
        </svg>
        <p className="font-bold">Sort by: {sortValue}</p>
        <svg className="size-5 text-black rotate-180 ">
          <use href="../sprite.svg#up_icon"></use>
        </svg>
      </div>
      <div
        ref={ref}
        className={`text-lg sm:text-base absolute left-0 z-10 w-full p-2 gap-2 flex flex-col rounded-md bg-white border border-gray-200 transition-all duration-100
    ${
      opensort
        ? "translate-y-23 opacity-100 visible"
        : "translate-y-25 opacity-0 invisible"
    }`}
      >
        <p
          onClick={() => {
            SetSortValue("Most expensive");
            setOpenSort(false);
          }}
          className=" hover:bg-slate-200/60 rounded-md cursor-pointer p-1"
        >
          Most expensive
        </p>
        <p
          onClick={() => {
            SetSortValue("Most cheap");
            setOpenSort(false);
          }}
          className=" hover:bg-slate-200/60 rounded-md cursor-pointer p-1"
        >
          Most cheap
        </p>
        <p
          onClick={() => {
            SetSortValue("Most popular");
            setOpenSort(false);
          }}
          className=" hover:bg-slate-200/60 rounded-md cursor-pointer p-1"
        >
          Most popular
        </p>
      </div>
    </div>
  );
}

export default SortBy;
