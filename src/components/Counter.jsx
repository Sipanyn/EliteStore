import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/productSlice";
import btnclick from "../utils/btnclick";

function Counter({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center gap-4 pt-2 pb-2 pl-3 pr-3 rounded-md bg-slate-200/60">
      <p
        onClick={(event) => {
          dispatch(decrement(item));
          btnclick(event);
        }}
        className="text-gray-500 cursor-pointer border-r-1 pr-3 border-gray-400 select-none"
      >
        -
      </p>

      <p className="font-bold">{item.count}</p>

      <p
        onClick={(event) => {
          dispatch(increment(item));
          btnclick(event);
        }}
        className="text-gray-500 cursor-pointer border-l-1 pl-3 border-gray-400 select-none"
      >
        +
      </p>
    </div>
  );
}

export default Counter;
