import { useState } from "react";
import SmSearchBar from "./SmSearchBar";
function Header() {
  const [smSearchBar, setSmSearchBar] = useState(false);
  function smSearchBarHandler() {
    setSmSearchBar((pre) => !pre);
  }
  return (
    <>
      <div className="flex flex-row justify-between gap-1.5 border-b-1 border-gray-200/80 backdrop-blur-md  pl-5 pr-5 sm:pl-20  sm:pr-20  md:pl-40 md:pr-40 pt-1.5 sm:pt-5 relative">
        {/* logo */}
        <div className="flex flex-row items-center gap-1.5 mb-2">
          {/* logo */}
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <span className="text-white font-bold">E</span>
          </div>
          <p className="font-bold">EliteStore</p>
        </div>
        {/* search bar complete */}
        <div className=" flex-row gap-1.5 rounded-md bg-slate-200/40 mb-2 w-[300px] hidden xs:flex">
          <svg className="size-9 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
            <use href="../sprite.svg#search_icon"></use>
          </svg>
          <input
            className="outline-0"
            type="text"
            placeholder="Search products..."
          />
        </div>

        {/* icons */}
        <div className="flex flex-row">
          {/* search bar icon */}
          <svg
            onClick={() => smSearchBarHandler()}
            className="size-9 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md block xs:hidden"
          >
            <use href="../sprite.svg#search_icon"></use>
          </svg>
          <div className="relative">
            <svg className="size-9 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
              <use href="../sprite.svg#cart_icon"></use>
            </svg>
            <span className="bg-red-500 rounded-md pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-white text-[9px] absolute top-0  right-0">
              3
            </span>
          </div>
          <svg className="size-9 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
            <use href="../sprite.svg#user_icon"></use>
          </svg>
        </div>
      </div>

      <SmSearchBar
        smSearchBar={smSearchBar}
        smSearchBarHandler={smSearchBarHandler}
      />
    </>
  );
}

export default Header;
