import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import CheckOut from "./CheckOut";
function Cart({ SetCartOpen }) {
  // const myArray = [1, 2, 3, 4, 5];
  const cart = useSelector((state) => state.product.cart);
  const total = useSelector((state) => state.product.total);
  const discount = useSelector((state) => state.product.discount);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your 🛒 is empty</p>
          <p
            onClick={() => SetCartOpen(false)}
            className="border-1 border-gray-200 rounded-md w-fit p-2 m-auto mt-3 hover:bg-slate-200/60 cursor-pointer"
          >
            Back to home
          </p>
        </div>
      ) : (
        <div className="relative p-5 pt-11 sm:pt5 sm:pl-20  sm:pr-20  md:pl-40 md:pr-40 md:pt-10  md:pb-10    pb-3 sm:pt-5 w-full h-fit  bg-slate-100 flex flex-col justify-between gap-2 xs:flex-row">
          {/* products */}

          <div className="bg-white rounded-md flex flex-col p-2.5 gap-1.5 flex-1">
            {/* product */}

            {cart.map((item) => {
              return <CartProduct item={item} key={item.id} />;
            })}
          </div>

          {cart.length > 0 && (
            <CheckOut total={total} cart={cart} discount={discount} />
          )}
          {/* close */}
          {cart.length > 0 && (
            <svg
              onClick={() => SetCartOpen((pre) => !pre)}
              className=" size-8 text-gray-400  border-1 border-slate-600 rounded-md cursor-pointer absolute top-1.5 right-4.5"
            >
              <use href="../sprite.svg#close_icon"></use>
            </svg>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
