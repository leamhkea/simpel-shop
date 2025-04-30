"use client";
import { BsBasket2 } from "react-icons/bs";
import useItemStore from "@/store/itemStore";

const BasketIcon = () => {
  const { items, itemSum } = useItemStore((state) => state);

  console.log(itemSum);

  return (
    <div className="relative">
      <BsBasket2 size={30} />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-(--grey) text-(--black) rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {itemSum()}
        </span>
      )}
    </div>
  );
};

export default BasketIcon;
