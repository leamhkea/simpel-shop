"use client";
import useItemStore from "@/store/itemStore";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";

const ItemQuantity = ({ id, qty }) => {
  const incQuantity = useItemStore((state) => state.incQuantity);
  const decQuantity = useItemStore((state) => state.decQuantity);

  return (
    <div>
      <div className="flex items-center space-x-2 w-25">
        <button onClick={() => decQuantity(id)}>
          <HiMinus />
        </button>
        <input
          type="number"
          value={qty}
          onChange={(e) => setCount(Math.max(1, +e.target.value))}
          className="text-center w-12"
        />
        <button onClick={() => incQuantity(id)}>
          <BsPlusLg />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ItemQuantity;
