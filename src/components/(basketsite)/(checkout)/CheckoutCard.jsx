import CheckoutButton from "./CheckoutButton";

const CheckoutCard = () => {
  return (
    <div className="flex flex-col justify-between h-100">
      <div>
        <div className="flex justify-between flex-wrap mb-2">
          <h3>Shipping</h3>
          <h3>DDK 29</h3>
        </div>
        <div className="flex justify-between flex-wrap mb-2">
          <h3>Total</h3>
          <h3 className="font-bold">DDK 318</h3>
        </div>
        <hr />
      </div>
      <CheckoutButton />
    </div>
  );
};

export default CheckoutCard;
