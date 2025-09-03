import { useDispatch } from "react-redux";
import { removefromCart } from "../features/productSlice";
import Counter from "./Counter";
function CartProduct({ item }) {
  const dispatch = useDispatch();
  const myArray = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-row justify-between flex-wrap lg:flex-nowrap gap-2 items-center p-2 border-1 border-gray-200 rounded-md">
      {/* product img info */}
      <div className="flex flex-row gap-1.5">
        <div className="size-12 rounded-md">
          <img className="size-full rounded-md" src={item.src} alt="" />
        </div>
        <div className="flex flex-col  justify-around">
          <p>{item.title}</p>
          <div className="flex flex-row">
            {myArray.map((item) => {
              return (
                <svg key={item} className="size-4  text-amber-400">
                  <use href="../sprite.svg#star_icon"></use>
                </svg>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap w-full lg:w-[40%] items-center">
        {/* price */}
        <div className="flex flex-col-reverse gap-1">
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
        <Counter item={item} />
        <svg
          onClick={() => dispatch(removefromCart(item))}
          className="size-9 text-black pl-2 pr-2 rounded-tr-md rounded-br-md cursor-pointer p-1.5 hover:bg-slate-200/60 rounded-md"
        >
          <use href="../sprite.svg#delete_icon"></use>
        </svg>
      </div>
    </div>
  );
}

export default CartProduct;
