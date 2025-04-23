"use client";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";

const ItemQuantity = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div className="flex items-center space-x-2 w-25">
        <button onClick={() => setCount(Math.max(1, count - 1))}>
          <HiMinus />
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Math.max(1, +e.target.value))}
          className="text-center w-12"
        />
        <button onClick={() => setCount(count + 1)}>
          <BsPlusLg />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ItemQuantity;
