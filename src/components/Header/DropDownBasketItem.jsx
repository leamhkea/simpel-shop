import Image from "next/image";

const DropDownBasketItem = ({ data }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={data.thumbnail || "/placeholder.png"}
        width={100}
        height={100}
        alt="display photo"
        className="object-contain"
      />
      <div className="flex justify-between flex-1">
        <div>
          <h3>{data.title}</h3>
          <p>{data.brand}</p>
        </div>
        <h3 className="font-bold">{data.price} $</h3>
      </div>
    </div>
  );
};

export default DropDownBasketItem;
