import { BsBasket2 } from "react-icons/bs";
import Link from "next/link";
import useItemStore from "@/store/itemStore";
import DropDownBasketItem from "./DropDownBasketItem";

const DropDownBasket = () => {
  const { items, totalPrice } = useItemStore((state) => state);

  return (
    <div className="grid gap-2">
      {/* Produkter i kurven */}
      {items.length > 0 ? (
        items.map((item) => <DropDownBasketItem key={item.id} data={item} />)
      ) : (
        <p>No products have been added to the basket</p>
      )}

      {/* Kun én gang! Total + knap */}
      {items.length > 0 && (
        <>
          <hr />
          <div className="flex justify-between flex-wrap mb-2">
            <h3>Total</h3>
            <h3 className="font-bold">{totalPrice()} $</h3>
          </div>

          <Link href="/basket">
            <button className="py-5 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5 hover:scale-105 transition-all duration-300">
              Go to basket <BsBasket2 size={20} />
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default DropDownBasket;
