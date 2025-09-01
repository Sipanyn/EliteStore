function Product({ item, setShowAdd, showAdd }) {
  const myArray = [1, 2, 3, 4, 5];

  return (
    <div
      className={`flex flex-col rounded-md h-[310px] sm:h-[360px] w-[165px] sm:w-[200px] border-1 border-gray-300 pb-3 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-101 ${
        showAdd === item.id ? "scale-101 shadow-md" : null
      }`}
    >
      {/* image */}
      <div
        onClick={() => setShowAdd(item.id)}
        className=" group w-full h-[215px] sm:h-[270px] rounded-tl-md rounded-tr-md relative"
      >
        <img
          className="object-fit rounded-tl-md rounded-tr-md"
          src={item.src}
          alt=""
        />
        {item.discount !== 0 ? (
          <p className="text-white text-xs pt-0.5 pb-0.5 pl-1 pr-1 rounded-md absolute top-1.5 left-1 bg-red-500">
            -{item.discount}%
          </p>
        ) : null}
        {item.new && (
          <p className="text-white text-xs pt-0.5 pb-0.5 pl-1 pr-1 rounded-md absolute top-1.5 left-1 bg-green-500">
            New
          </p>
        )}
        <div
          className={`group-hover:-translate-y-1 group-hover:opacity-100  group-hover:visible flex items-center ${
            showAdd === item.id ? "opacity-100 visible -translate-y-1" : null
          }  flex flex-row justify-center w-[80%]  rounded-md gap-2 text-white bg-stone-900/90 absolute left-0 right-0 bottom-4 m-auto opacity-0 invisible  transition-all duration-300`}
        >
          <svg className="size-5 ">
            <use href="../sprite.svg#cart_icon"></use>
          </svg>
          <p>Add to Cart</p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-around gap-2 pl-4">
        <p className="font-bold pr-1.5 ">{item.title}</p>
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
          {item.discount > 0 ? (
            <p className="font-bold">
              ${(item.price * (1 - item.discount / 100)).toFixed(1)}
            </p>
          ) : (
            <p className="font-bold">${item.price}</p>
          )}

          {item.discount > 0 && (
            <p className="line-through text-gray-300">${item.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
