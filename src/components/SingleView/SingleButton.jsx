"use client";
import useItemStore from "@/store/itemStore";

const SingleButton = ({ item, children }) => {
  const addItem = useItemStore((state) => state.addItem);
  const updateQuantity = useItemStore((state) => state.incQuantity);
  const items = useItemStore((state) => state.items);

  console.log("items:", items);
  const addToBasket = (item) => {
    if (items.length) {
      const duplicate = items.find((el) => el.id === item.id);
      console.log("duplicate? ", duplicate);
      if (duplicate) {
        updateQuantity(item.id);
      } else {
        addItem({ ...item, quantity: 1 });
      }
    } else {
      addItem({ ...item, quantity: 1 });
    }
  };

  return (
    <button
      onClick={() => addToBasket(item)}
      className="py-3 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5 hover:scale-105 transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default SingleButton;
