import ImageDisplay from "./ImageDisplay";
import Description from "./Description";
import SingleButton from "./ButtonAddToBasket";
import { BsBasket2 } from "react-icons/bs";

const SingleCard = ({ product }) => {
  return (
    <div className="flex flex-wrap gap-5 bg-(--white) px-10 py-10 min-h-150 shadow-md justify-between">
      <ImageDisplay images={product.images} />
      <div className="flex flex-col justify-between">
        <Description {...product} />
        <div className="flex justify-between flex-wrap">
          <SingleButton item={product}>
            Add to basket <BsBasket2 size={20} />
          </SingleButton>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
