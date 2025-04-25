import ProductQuantity from "./ProductQuantity";
import Image from "next/image";
import useItemStore from "@/store/itemStore";

const ItemCard = ({ data }) => {
  const removeItem = useItemStore((state) => state.removeItem);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-20 p-10 shadow-md">
      <Image
        src={data.thumbnail}
        width={100}
        height={100}
        alt="display photo"
        className="max-w-full object-contain"
      />

      {/* Top section */}
      <div className="flex flex-col justify-between flex-1 gap-10">
        <div>
          <div className="flex justify-between flex-wrap mb-2">
            <h2>{data.title}</h2>
            <h3 className="font-bold">{data.price} $</h3>
          </div>
          <h3>{data.brand}</h3>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between flex-wrap">
          <ProductQuantity id={data.id} qty={data.quantity} />
          <div>
            <button
              onClick={() => removeItem(data.id)}
              className="hover:text-red-600"
            >
              Remove
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
