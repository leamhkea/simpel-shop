import ItemQuantity from "./ItemQuantity";
import SizeDropdown from "@/components/(singleview)/(details)/SizeDropdown";

const ItemCard = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <img src="placeholder.png" alt="placeholder" />

      {/* Top section */}
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex justify-between flex-wrap">
            <h2>Name on the product</h2>
            <h3 className="font-bold">DDK 159</h3>
          </div>
          <h3>Brand</h3>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between flex-wrap">
          <ItemQuantity />
          <SizeDropdown />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
