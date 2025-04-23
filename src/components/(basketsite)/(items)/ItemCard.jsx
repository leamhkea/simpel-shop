import ItemQuantity from "./ItemQuantity";
import ItemSizeDropdown from "./ItemSizeDropdown";

const ItemCard = () => {
  return (
    <div className="flex flex-wrap gap-4 my-20">
      <img src="placeholder.png" alt="placeholder" />

      {/* Top section */}
      <div className="flex flex-col justify-between w-100">
        <div>
          <div className="flex justify-between flex-wrap mb-2">
            <h2>Name on the product</h2>
            <h3 className="font-bold">DDK 159</h3>
          </div>
          <h3>Brand</h3>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between flex-wrap">
          <ItemQuantity />
          <ItemSizeDropdown />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
