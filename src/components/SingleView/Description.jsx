"use client";
import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";

const Description = ({
  title,
  brand,
  price,
  description,
  weight,
  warrantyInformation,
  dimensions,
  returnPolicy,
  availabilityStatus,
  shippingInformation,
}) => {
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenReturnAndShipment, setIsOpenReturnAndShipment] = useState(false);

  return (
    <article className="flex flex-col gap-10 w-100 ml-2">
      <div>
        <div className="flex items-baseline gap-1.5">
          <h2>{title}</h2>
          <p>{brand}</p>
        </div>
        <div className="flex items-baseline gap-3">
          <h3>{price}$</h3>
          <p>{availabilityStatus}</p>
        </div>
      </div>
      <div className="grid gap-2">
        <h3>Description</h3>
        <hr />
        <p>{description}</p>
      </div>
      <details>
        <summary
          className="cursor-pointer"
          onClick={() => setIsOpenInfo(!isOpenInfo)}
        >
          <div className="flex justify-between items-center">
            <h3>Info</h3>
            {isOpenInfo ? <HiMinus size={20} /> : <HiPlus size={20} />}{" "}
          </div>
          <hr />
        </summary>
        <div className="flex justify-between items-center py-2">
          <h3>Weight:</h3>
          <p>{weight}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center py-2">
          <h3>Warranty Information:</h3>
          <p>{warrantyInformation}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center py-2">
          <h3>Dimensions:</h3>
          <p>{`${dimensions.length} x ${dimensions.width} x ${dimensions.height}`}</p>
        </div>
      </details>
      <details>
        <summary
          className="cursor-pointer"
          onClick={() => setIsOpenReturnAndShipment(!isOpenReturnAndShipment)}
        >
          <div className="flex justify-between items-center">
            <h3>Shipping & Returnment</h3>
            {isOpenReturnAndShipment ? (
              <HiMinus size={20} />
            ) : (
              <HiPlus size={20} />
            )}{" "}
          </div>
          <hr />
        </summary>
        <div className="flex justify-between items-center py-2">
          <h3>Shipping:</h3>
          <p>{shippingInformation}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center py-2">
          <h3>Return Policy:</h3>
          <p>{returnPolicy}</p>
        </div>
      </details>
    </article>
  );
};

export default Description;
