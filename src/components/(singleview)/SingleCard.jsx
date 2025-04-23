import ImageDisplay from "./(singleimg)/ImageDisplay";
import Description from "./(details)/Description";
import SingleButton from "./(details)/SingleButton";

const SingleCard = () => {
  return (
    <div className="flex flex-wrap gap-5 bg-(--white) px-10 py-10">
      <ImageDisplay />
      <div className="flex flex-col justify-between">
        <Description />
        <div className="flex justify-between flex-wrap">
          <SingleButton />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
