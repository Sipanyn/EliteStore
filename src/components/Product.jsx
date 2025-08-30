function Product() {
  const myArray = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col rounded-md h-[320px] sm:h-[360px] w-[165px] sm:w-[200px] border-1 border-gray-300 pb-3 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-101">
      {/* image */}
      <div className=" group :w-full h-[300px] rounded-tl-md rounded-tr-md relative">
        <img
          className="object-fit rounded-tl-md rounded-tr-md"
          src="/photo-1505740420928-5e560c06d30e.jpg"
          alt=""
        />
        <p className="text-white text-xs pt-0.5 pb-0.5 pl-1 pr-1 rounded-md absolute top-1.5 left-1 bg-red-500">
          -20%
        </p>
        {/* <p className="text-white text-xs pt-0.5 pb-0.5 pl-1 pr-1 rounded-md absolute top-1.5 left-1 bg-green-500">
          New
        </p> */}
        <div className="group-hover:-translate-y-5 group-hover:opacity-100  group-hover:visible  flex flex-row justify-center w-[80%]  rounded-md gap-2 text-white bg-stone-900/90 absolute left-0 right-0 bottom-4 m-auto opacity-0 invisible  transition-all duration-300">
          <svg className="size-5 ">
            <use href="../sprite.svg#cart_icon"></use>
          </svg>
          <p>Add to Cart</p>
        </div>
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
