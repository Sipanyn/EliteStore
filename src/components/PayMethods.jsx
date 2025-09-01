import { useState } from "react";

function PayMethods() {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-row justify-around xs:justify-between">
      <svg
        onClick={() => setActive("bitcoin")}
        className={`size-10  bg-slate-200/60  pl-2 pr-2 rounded-md cursor-pointer ${
          active === "bitcoin" && "border-1 border-black"
        }`}
      >
        <use href="../sprite.svg#bitcoin_icon"></use>
      </svg>
      <svg
        onClick={() => setActive("gpay")}
        className={`size-10  bg-slate-200/60  pl-2 pr-2 rounded-md cursor-pointer ${
          active === "gpay" && "border-1 border-black"
        }`}
      >
        <use href="../sprite.svg#gpay_icon"></use>
      </svg>
      <svg
        onClick={() => setActive("visa")}
        className={`size-10  bg-slate-200/60  pl-2 pr-2 rounded-md cursor-pointer ${
          active === "visa" && "border-1 border-black"
        }`}
      >
        <use href="../sprite.svg#visa_icon"></use>
      </svg>
      <svg
        onClick={() => setActive("paypal")}
        className={`size-10  bg-slate-200/60  pl-2 pr-2 rounded-md cursor-pointer ${
          active === "paypal" && "border-1 border-black"
        }`}
      >
        <use href="../sprite.svg#paypal_icon"></use>
      </svg>
    </div>
  );
}

export default PayMethods;
