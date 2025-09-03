import { useState } from "react";
import useProduct from "../hooks/useProduct";
import NoMaching from "./NoMaching";
import Product from "./Product";
import SortBy from "./SortBy";

function ProductsMainContainer({
  setFilterMenuOpen,
  sorted_filterdItems,
  clearFilters,
  sortValue,
  SetSortValue,
}) {
  const [showAdd, setShowAdd] = useState(null);
  const { data, isLoading } = useProduct();

  return (
    <div className="flex flex-col justify-center gap-4">
      {/* header */}
      <div className="flex  gap-1.5  flex-col item-start sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-row items-center gap-2">
          <p>Products({sorted_filterdItems?.length})</p>
          <div
            onClick={() => setFilterMenuOpen((pre) => !pre)}
            className={`flex flex-row items-center gap-1 cursor-pointer pr-1.5 pl-1.5 pt-1 pb-1 hover:bg-slate-200/50 border-1 border-gray-200 rounded-md lg:opacity-0 lg:invisible`}
          >
            <svg className="size-4 text-black  rounded-tr-md rounded-br-md ">
              <use href="../sprite.svg#filter_icon"></use>
            </svg>
            <p>Filters</p>
          </div>
        </div>
        <SortBy sortValue={sortValue} SetSortValue={SetSortValue} />
      </div>
      {/* products */}
      <div className="flex flex-row justify-center gap-2 flex-wrap">
        {sorted_filterdItems?.map((item) => {
          return (
            <Product
              item={item}
              key={item.id}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
            />
          );
        })}
        {sorted_filterdItems?.length === 0 && (
          <NoMaching clearFilters={clearFilters} />
        )}
      </div>
    </div>
    // <NoMaching />
  );
}

export default ProductsMainContainer;
