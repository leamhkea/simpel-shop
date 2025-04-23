import ItemCard from "./(items)/ItemCard";

const BasketCard = () => {
  return (
    <section>
      <div className="bg-(--white) px-10 py-10">
        <h2 className="font-bold">Basket (quantity)</h2>
        <ItemCard />
      </div>
      <div className="bg-(--white) px-10 py-10">
        <h2 className="font-bold">Order summary</h2>
      </div>
    </section>
  );
};

export default BasketCard;
