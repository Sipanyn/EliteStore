import { useDispatch } from "react-redux";
import PayMethods from "./PayMethods";
import { useEffect } from "react";
import { calDiscount, calTotal } from "../features/productSlice";

function CheckOut({ total, cart, discount }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calTotal());
    dispatch(calDiscount());
  }, [cart]);
  return (
    <div className="flex flex-col gap-5 w-full xs:w-[200px]  ">
      {/* coupon code */}
      <div className="flex flex-col divide-y bg-white rounded-md  pt-4 pb-4 pl-2 pr-2 divide-gray-200 gap-2">
        <p className="font-bold pb-2">Coupon Code</p>
        <div className="flex flex-col gap-2">
          <input
            className="h-full p-3 rounded-md rounded-bl-md outline-0 bg-slate-200/40  "
            type="text"
            placeholder="Enter your coupon code"
          />
          <div className="border-1 p-2 text-blue-500 rounded-md bg-white text-center cursor-pointer hover:bg-slate-200/60">
            Apply your coupon
          </div>
        </div>
      </div>
      {/* summary */}
      <div className="flex flex-col divide-y bg-white rounded-md  pt-4 pb-4 pl-2 pr-2 divide-gray-200 gap-2">
        <p className="font-bold pb-2">Order Summary</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-400">Discount</p>
            <p>${discount}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-400">Delivery</p>
            <p>$20.00</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-400">Tax</p>
            <p>$3.00</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-400 ">Total</p>
            <p className="font-bold text-lg">${total}</p>
          </div>
        </div>
      </div>
      {/* payment */}
      <div className="flex flex-col  bg-white rounded-md  pt-4 pb-4 pl-2 pr-2 divide-gray-200 gap-2">
        <p className="font-bold pb-2">Payment Method</p>
        <PayMethods />
        <div className=" p-2  text-white rounded-md bg-blue-500 text-center cursor-pointer hover:bg-blue-400">
          Check Out
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
