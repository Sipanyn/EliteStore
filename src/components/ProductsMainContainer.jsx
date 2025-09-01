import { useState } from "react";
import useProduct from "../hooks/useProduct";
import NoMaching from "./NoMaching";
import Product from "./Product";

function ProductsMainContainer({ setFilterMenuOpen }) {
  const [showAdd, setShowAdd] = useState(null);
  const { data, isLoading } = useProduct();
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <div className="flex  gap-1.5 justify-between items-center  flex-row">
        <div className="flex flex-row items-center gap-2">
          <p>Products(8)</p>
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
        <div className="flex flex-row items-center gap-2 bxs:gap-9 border-1 border-gray-200 hover:bg-slate-200/60 rounded-md cursor-pointer pt-1 pb-1 pl-2.5 pr-2.5">
          <div className="flex flex-row items-center gap-1.5">
            <svg className="size-5 text-black">
              <use href="../sprite.svg#upDown_icon"></use>
            </svg>
            <p className="font-bold">Sort by:Price</p>
          </div>
          <svg className="size-5 text-black rotate-180 ">
            <use href="../sprite.svg#up_icon"></use>
          </svg>
        </div>
      </div>
      {/* products */}
      <div className="flex flex-row justify-center gap-2 flex-wrap">
        {data?.map((item) => {
          return (
            <Product
              item={item}
              key={item.id}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
            />
          );
        })}
      </div>
    </div>
    // <NoMaching />
  );
}

export default ProductsMainContainer;
