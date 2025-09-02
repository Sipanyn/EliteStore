import { useState } from "react";
import Filter from "./Filter";
import ProductsMainContainer from "./ProductsMainContainer";
import useProduct from "../hooks/useProduct";

function MainContainer() {
  const { data, isLoading } = useProduct();
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [value, setValue] = useState([0, 300]);
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };
  const handleRatingChange = (e) => {
    setSelectedRating(Number(e.target.value));
  };
  const filteredData = data?.filter((item) => {
    const inCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const inPriceRange = item.price >= value[0] && item.price <= value[1];

    const meetsRating = selectedRating === null || item.rate >= selectedRating;

    return inCategory & inPriceRange & meetsRating;
  });
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setValue([0, 300]);
  };
  return (
    <div className="flex flex-row justify-between gap-2.5 bxs:gap-1 pl-2 pr-2 sm:pl-20  sm:pr-20  md:pl-40 md:pr-40 pt-1.5 sm:pt-5 pb-4 ">
      {isLoading ? (
        <svg className={`size-20 m-auto`}>
          <use href="../sprite.svg#elite_icon"></use>
        </svg>
      ) : (
        <>
          {" "}
          <div
            className={`
         z-10 fixed left-0 top-0 w-[70%] h-[100%]
         lg:z-0  lg:translate-x-0  lg:block lg:relative lg:h-fit lg:w-[280px]
          ${!filterMenuOpen && "-translate-x-[200%] hidden"}`}
          >
            <Filter
              setFilterMenuOpen={setFilterMenuOpen}
              handleCategoryChange={handleCategoryChange}
              handleRatingChange={handleRatingChange}
              clearFilters={clearFilters}
              value={value}
              setValue={setValue}
              setSelectedCategories={setSelectedCategories}
              selectedCategories={selectedCategories}
              selectedRating={selectedRating}
            />
          </div>
          <div className="flex flex-col flex-1">
            <ProductsMainContainer
              setFilterMenuOpen={setFilterMenuOpen}
              filteredData={filteredData}
              clearFilters={clearFilters}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default MainContainer;
