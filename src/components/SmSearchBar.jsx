function SmSearchBar({ smSearchBar, smSearchBarHandler }) {
  return (
    <div
      className={`border-1 bg-white border-gray-200/60 rounded-md mb-2 xs:hidden absolute mt-0 w-full transition-all duration-100 p-1 pt-8  ${
        smSearchBar ? "translate-x-[0] " : "translate-x-[110%] "
      }`}
    >
      <div
        className={`flex flex-row jus items-center gap-1.5 rounded-md bg-slate-200/40  w-[80%] m-auto mt-2 mb-1.5
   `}
      >
        <svg className="size-10 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md">
          <use href="../sprite.svg#search_icon"></use>
        </svg>
        <input
          className="outline-0 text-lg "
          type="text"
          placeholder="Search products..."
        />
        <svg
          onClick={() => smSearchBarHandler()}
          className="size-8 sm:size-9 text-gray-400  rounded-tr-md mb-1.5 mr-3 border-1 border-slate-600 rounded-md absolute top-1 right-1 cursor-pointer"
        >
          <use href="../sprite.svg#close_icon"></use>
        </svg>
      </div>
    </div>
  );
}
export default SmSearchBar;
