import ImageDisplay from "./ImageDisplay";
import Description from "./Description";
import SingleButton from "./SingleButton";

const SingleCard = ({ product }) => {
  return (
    <div className="flex flex-wrap gap-5 bg-(--white) px-10 py-10 min-h-150">
      <ImageDisplay images={product.images} />
      <div className="flex flex-col justify-between">
        <Description {...product} />
        <div className="flex justify-between flex-wrap">
          <SingleButton item={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
