"use client";

import ItemCard from "./ItemCard";
import CheckoutCard from "./CheckoutCard";
import useItemStore from "@/store/itemStore";

const BasketCard = () => {
  const { items } = useItemStore((state) => state);
  return (
    <section className="grid grid-cols-[2fr_1fr] gap-6 py-10">
      <div className="bg-(--white) px-10 py-10">
        <h2 className="font-bold pb-20">Basket (quantity)</h2>
        <div className="mb-8">
          {items.map((item) => (
            <ItemCard key={item.id} data={item} className="mb-8" />
          ))}
        </div>
      </div>
      <div className="bg-(--white) px-10 py-10 sticky top-10 self-start">
        <h2 className="font-bold pb-20">Order summary</h2>
        <CheckoutCard items={items} />
      </div>
    </section>
  );
};

export default BasketCard;
