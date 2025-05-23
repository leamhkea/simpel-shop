"use client";

import ProductInBasketCard from "./ProductInBasketCard";
import CheckoutCard from "./CheckoutCard";
import useItemStore from "@/store/itemStore";
import ButtonEmptyBasket from "./ButtonEmptyBasket";

const BasketCard = () => {
  const { items } = useItemStore((state) => state);
  const itemSum = useItemStore((state) => state.itemSum());

  return (
    <div className="flex flex-col lg:flex-row m-20 gap-6 py-10 px-4">
      {/* Basket-indholdet */}
      <div className="flex-1 bg-white px-6 py-10 shadow-md flex flex-col">
        <h2 className="font-bold pb-10">Basket ({itemSum})</h2>
        <div className="flex-1">
          {items && items.length > 0 ? (
            items.map((item) => (
              <ProductInBasketCard key={item.id} data={item} />
            ))
          ) : (
            <p>No products have been added to the basket</p>
          )}
        </div>
        <div className="mt-auto pt-6">
          <ButtonEmptyBasket>Empty Basket</ButtonEmptyBasket>
        </div>
      </div>

      {/* Order summary --> bliver sticky kun på større skærme */}
      <div className="w-full lg:w-1/3 bg-white px-6 py-10 shadow-md md:sticky md:top-20 md:self-start">
        <h2 className="font-bold pb-10">Order summary</h2>
        <CheckoutCard items={items} />
      </div>
    </div>
  );
};

export default BasketCard;
