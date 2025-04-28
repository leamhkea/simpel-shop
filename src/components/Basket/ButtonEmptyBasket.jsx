"use client";
import useItemStore from "@/store/itemStore";

const SingleButton = ({ item, children }) => {
  const items = useItemStore((state) => state.items);

  console.log("items:", items);
  const emptyBasket = (item) => [];

  return (
    <button
      onClick={() => emptyBasket(item)}
      className="py-5 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5 hover:scale-105 transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default SingleButton;
