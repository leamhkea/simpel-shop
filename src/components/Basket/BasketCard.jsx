"use client";

import ProductInBasketCard from "./ProductInBasketCard";
import CheckoutCard from "./CheckoutCard";
import useItemStore from "@/store/itemStore";

const BasketCard = () => {
  const { items } = useItemStore((state) => state);

  return (
    <div className="flex flex-col lg:flex-row gap-6 py-10 px-4">
      {/* Basket-indholdet */}
      <div className="flex-1 bg-white px-6 py-10 shadow-md">
        <h2 className="font-bold pb-10">Basket ({items.length})</h2>
        <div>
          {items && items.length > 0 ? (
            items.map((item) => (
              <ProductInBasketCard key={item.id} data={item} />
            ))
          ) : (
            <p>No products have been added to the basket</p>
          )}
        </div>
      </div>

      {/* Order summary --> bliver sticky kun på større skærme */}
      {/* md:w-1/3 --> På medium skærme og op (≥768px) bliver bredden 1/3 af containeren. */}
      <div className="w-full lg:w-1/3 bg-white px-6 py-10 shadow-md md:sticky md:top-20 md:self-start">
        <h2 className="font-bold pb-10">Order summary</h2>
        <CheckoutCard items={items} />
      </div>
    </div>
  );
};

export default BasketCard;
