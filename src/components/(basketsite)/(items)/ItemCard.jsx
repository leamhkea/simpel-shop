import ItemQuantity from "./ItemQuantity";

const ItemCard = () => {
  return (
    <div>
      <img src="placeholder.png" alt="placeholder" />
      <div className="flex justify-between">
        <h2>Name on the product</h2>
        <h3>
          <strong>DDK 159</strong>
        </h3>
      </div>
      <h3>Brand</h3>
      <ItemQuantity />
    </div>
  );
};

export default ItemCard;
