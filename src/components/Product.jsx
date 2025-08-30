function Product() {
  const myArray = [1, 2, 3, 4];
  return (
    <div className="flex flex-col rounded-md h-[320px] sm:h-[360px] w-[165px] sm:w-[200px] border-1 border-gray-300 pb-3 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-101">
      {/* image */}
      <div className="w-full h-[300px] rounded-tl-md rounded-tr-md">
        <img
          className="object-fit rounded-tl-md rounded-tr-md"
          src="/photo-1505740420928-5e560c06d30e.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 pl-4">
        <p className="font-bold">Premium Wireless Headphones</p>
        {/* stars */}
        <div className="flex flex-row">
          {myArray.map((item) => {
            return (
              <svg key={item} className="size-4  text-amber-400">
                <use href="../sprite.svg#star_icon"></use>
              </svg>
            );
          })}
        </div>

        {/* price */}
        <div className="flex flex-row gap-1">
          <p className="font-bold">$199</p>
          <p className="line-through text-gray-300">$244</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
