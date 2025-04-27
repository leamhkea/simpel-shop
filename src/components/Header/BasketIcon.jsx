"use client";
import { BsBasket2 } from "react-icons/bs";
import useStore from "@/store/notifStore";

const BasketIcon = () => {
  const { items } = useStore();

  return (
    <div className="relative">
      <BsBasket2 size={30} />
      {items > 0 && (
        <span className="absolute -top-1 -right-1 bg-(--grey) text-(--black) rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {items}
        </span>
      )}
    </div>
  );
};

export default BasketIcon;
