import { useState } from "react";
import Filter from "./Filter";
import ProductsMainContainer from "./ProductsMainContainer";
import useProduct from "../hooks/useProduct";

function MainContainer() {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between gap-2.5 bxs:gap-1 pl-2 pr-2 sm:pl-20  sm:pr-20  md:pl-40 md:pr-40 pt-1.5 sm:pt-5 pb-4">
      <div
        className={`
         z-10 fixed left-0 top-0 w-[70%] h-[100%]
         lg:z-0  lg:translate-x-0  lg:block lg:relative lg:h-fit lg:w-[280px]
          ${!filterMenuOpen && "-translate-x-[200%] hidden"}`}
      >
        <Filter setFilterMenuOpen={setFilterMenuOpen} />
      </div>
      <div className="flex flex-col flex-1">
        <ProductsMainContainer setFilterMenuOpen={setFilterMenuOpen} />
      </div>
    </div>
  );
}

export default MainContainer;
