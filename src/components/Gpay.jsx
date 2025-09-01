import { useState } from "react";

function Gpay({ active }) {
  return (
    <svg
      className={`size-10  bg-slate-200/60  pl-2 pr-2 rounded-md cursor-pointer ${
        active && "border-1 border-black"
      }`}
    >
      <use href="../sprite.svg#gpay_icon"></use>
    </svg>
  );
}

export default Gpay;
