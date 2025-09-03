import { useState } from "react";
import filterMenuHandler from "../utils/filterMenuHandler";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useProduct from "../hooks/useProduct";

function Filter({
  setFilterMenuOpen,
  handleCategoryChange,
  handleRatingChange,
  clearFilters,
  value,
  setValue,
  selectedCategories,
  selectedRating,
}) {
  const [CatmenuOpen, setCatMenuOpen] = useState(true);
  const [RatingMenuOpen, setRatingMenuOpen] = useState(true);
  const [priceMenuOpen, setPriceMenuOpen] = useState(true);
  const { data, isLoading } = useProduct();

  return (
    <div className="text-lg sm:text-base flex flex-col p-3 rounded-md border-1 border-black h-full w-full lg:w-[280px] mb-14 bg-white overflow-auto z-10 ">
      {/* header */}
      <div className="flex flex-col gap-1.5  items-center mb-1 lg:mb-8">
        {/* close */}
        <div className="lg:hidden flex justify-end w-full">
          <svg
            onClick={() => setFilterMenuOpen()}
            className={`size-8 text-gray-400  border-1 border-slate-600 rounded-md   cursor-pointer`}
          >
            <use href="../sprite.svg#close_icon"></use>
          </svg>
        </div>
        {/* filter + clear */}
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <svg className="size-9 text-black pl-2 pr-2 rounded-tr-md rounded-br-md ">
              <use href="../sprite.svg#filter_icon"></use>
            </svg>
            <p>Filters</p>
          </div>
          {/* clear */}
          <p onClick={clearFilters} className="cursor-pointer">
            Clear All
          </p>
        </div>
      </div>
      {/* categories */}
      <div
        onClick={() => filterMenuHandler(setCatMenuOpen)}
        className="flex flex-row justify-between items-center *:font-bold hover:bg-gray-200/40 p-1 rounded-md cursor-pointer mb-1.5"
      >
        <p>Categories</p>
        <svg
          className={`size-6 text-black transition-all duration-300 ${
            !CatmenuOpen && "rotate-180"
          }`}
        >
          <use href="../sprite.svg#up_icon"></use>
        </svg>
      </div>
      {/* categories menu */}
      {CatmenuOpen && (
        <ul className="flex flex-col gap-2 text-lg sm:text-base ">
          <li className="flex flex-row justify-between items-center pl-1 pr-3">
            <label className="flex flex-row items-center gap-2 cursor-pointer select-none custom-checkbox">
              <input
                type="checkbox"
                name="Electronics"
                value="Electronics"
                onChange={handleCategoryChange}
                checked={selectedCategories?.includes("Electronics")}
              />
              <span className="checkmark"></span>
              Electronics
            </label>
            <span className="text-gray-400">
              {
                data?.filter((item) => {
                  return item.category === "Electronics";
                }).length
              }
            </span>
          </li>
          <li className="flex flex-row justify-between pl-1 pr-3">
            <label className="flex flex-row items-center gap-2 cursor-pointer select-none custom-checkbox">
              <input
                type="checkbox"
                name="Clothing"
                value="Clothing"
                onChange={handleCategoryChange}
                checked={selectedCategories?.includes("Clothing")}
              />
              <span className="checkmark"></span>
              Clothing
            </label>
            <span className="text-gray-400">
              {" "}
              {
                data?.filter((item) => {
                  return item.category === "Clothing";
                }).length
              }
            </span>
          </li>
          <li className="flex flex-row justify-between pl-1 pr-3">
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-checkbox">
              <input
                type="checkbox"
                name="Books"
                value="Books"
                onChange={handleCategoryChange}
                checked={selectedCategories?.includes("Books")}
              />
              <span className="checkmark"></span>
              Books
            </label>
            <span className="text-gray-400">
              {" "}
              {
                data?.filter((item) => {
                  return item.category === "Books";
                }).length
              }
            </span>
          </li>
          <li className="flex flex-row justify-between pl-1 pr-3">
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-checkbox">
              <input
                type="checkbox"
                name="Home & Garden"
                value="Home & Garden"
                onChange={handleCategoryChange}
                checked={selectedCategories?.includes("Home & Garden")}
              />
              <span className="checkmark"></span>
              Home & Garden
            </label>
            <span className="text-gray-400">
              {" "}
              {
                data?.filter((item) => {
                  return item.category === "Home & Garden";
                }).length
              }
            </span>
          </li>
          <li className="flex flex-row justify-between pl-1 pr-3">
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-checkbox">
              <input
                type="checkbox"
                name="Sports"
                value="Sports"
                onChange={handleCategoryChange}
                checked={selectedCategories?.includes("Sports")}
              />
              <span className="checkmark"></span>
              Sports
            </label>
            <span className="text-gray-400">
              {" "}
              {
                data?.filter((item) => {
                  return item.category === "Sports";
                }).length
              }
            </span>
          </li>
          <li className="flex flex-row justify-between pl-1 pr-3">
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-checkbox">
              <input
                type="checkbox"
                name="Beauty"
                value="Beauty"
                onChange={handleCategoryChange}
                checked={selectedCategories?.includes("Beauty")}
              />
              <span className="checkmark"></span>
              Beauty
            </label>
            <span className="text-gray-400">
              {" "}
              {
                data?.filter((item) => {
                  return item.category === "Beauty";
                }).length
              }
            </span>
          </li>
        </ul>
      )}
      {/* Price Range */}
      <div
        onClick={() => filterMenuHandler(setPriceMenuOpen)}
        className="flex flex-row justify-between items-center *:font-bold hover:bg-gray-200/40 p-1 rounded-md cursor-pointer mb-1.5 mt-1.5"
      >
        <p className="text-lg sm:text-base">Price Range</p>
        <svg
          className={`size-6 text-black transition-all duration-300 ${
            !priceMenuOpen && "rotate-180"
          }`}
        >
          <use href="../sprite.svg#up_icon"></use>
        </svg>
      </div>
      {/* ranger */}
      {priceMenuOpen && (
        <div className="flex flex-col gap-2.5">
          <RangeSlider
            min={0}
            max={300}
            value={value}
            step={1}
            onInput={setValue}
          />

          <div className="flex flex-row justify-between">
            <p>${value[0]}</p>
            <p>${value[1]}</p>
          </div>
        </div>
      )}

      {/* minimum rating */}
      <div
        onClick={() => filterMenuHandler(setRatingMenuOpen)}
        className="flex flex-row justify-between items-center *:font-bold hover:bg-gray-200/40 p-1 rounded-md cursor-pointer mb-1.5 mt-1.5 "
      >
        <p className="text-lg sm:text-base">Minimum Rating</p>
        <svg
          className={`size-6 text-black  transition-all duration-300 ${
            !RatingMenuOpen && "rotate-180"
          }`}
        >
          <use href="../sprite.svg#up_icon"></use>
        </svg>
      </div>
      {/* minimum rating manu */}
      {RatingMenuOpen && (
        <ul className="flex flex-col gap-2 text-lg sm:text-base">
          <li>
            <label className="flex flex-row items-center gap-2 cursor-pointer select-none custom-radio">
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={handleRatingChange}
                checked={selectedRating === 4}
              />
              <span className="radio-mark"></span>
              4+ Stars
            </label>
          </li>
          <li>
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-radio">
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={handleRatingChange}
                checked={selectedRating === 3}
              />
              <span className="radio-mark"></span>
              3+ Stars
            </label>
          </li>
          <li>
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-radio">
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={handleRatingChange}
                checked={selectedRating === 2}
              />
              <span className="radio-mark"></span>
              2+ Stars
            </label>
          </li>
          <li>
            <label className="flex flex-row gap-2 items-center cursor-pointer select-none custom-radio">
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={handleRatingChange}
                checked={selectedRating === 1}
              />
              <span className="radio-mark"></span>
              1+ Stars
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Filter;
