import ImageDisplay from "./(singleimg)/ImageDisplay";
import Description from "./(details)/Description";
import SingleButton from "./(details)/SingleButton";

const SingleCard = ({ product }) => {
  return (
    <div className="flex flex-wrap gap-5 bg-(--white) px-10 py-10 min-h-150 justify-between">
      <ImageDisplay images={product.images} />
      <div className="flex flex-col justify-between">
        <Description {...product} />
        <div className="flex justify-between flex-wrap">
          <SingleButton />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
