import SingleButton from "../SingleView/ButtonAddToBasket";

const CheckoutCard = () => {
  return (
    <div className="flex flex-col justify-between h-100">
      <div>
        <div className="flex justify-between flex-wrap mb-2">
          <h3>Shipping</h3>
          <h3>7 $</h3>
        </div>
        <div className="flex justify-between flex-wrap mb-2">
          <h3>Total</h3>
          <h3 className="font-bold">318 $</h3>
        </div>
        <hr />
      </div>
      <button className="py-5 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5 hover:scale-105 transition-all duration-300">
        Checkout
      </button>
    </div>
  );
};

export default CheckoutCard;
