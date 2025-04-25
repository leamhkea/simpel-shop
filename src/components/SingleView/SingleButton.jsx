"use client";
import useItemStore from "@/store/itemStore";

const SingleButton = ({ item, children }) => {
  const { addItem } = useItemStore((state) => state);
  return (
    <button
      onClick={() => addItem(item)}
      className="py-3 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5 hover:scale-105 transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default SingleButton;
