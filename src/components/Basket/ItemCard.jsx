import ItemQuantity from "./ItemQuantity";
import Image from "next/image";

const ItemCard = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Image
        src={data.thumbnail}
        width={100}
        height={100}
        alt="display photo"
        className="object-contain max-w-full max-h-[400px]"
      />

      {/* Top section */}
      <div className="flex flex-col justify-between w-100">
        <div>
          <div className="flex justify-between flex-wrap mb-2">
            <h2>{data.title}</h2>
            <h3 className="font-bold">{data.title} $</h3>
          </div>
          <h3>{data.brand}</h3>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between flex-wrap">
          <ItemQuantity id={data.id} qty={data.qty} />
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
