"use client";
import { BsBasket2 } from "react-icons/bs";
import useItemStore from "@/store/itemStore";

const SingleButton = ({ item }) => {
  const addItem = useItemStore((state) => state.addItem);
  return (
    <button
      onClick={() => addItem(item)}
      className="py-3 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5"
    >
      Add to basket <BsBasket2 size={20} />
    </button>
  );
};

export default SingleButton;
