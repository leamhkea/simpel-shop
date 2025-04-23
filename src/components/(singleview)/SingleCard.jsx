import ImageDisplay from "./(singleimg)/ImageDisplay";
import Description from "./(details)/Description";
import SingleButton from "./(details)/SingleButton";

const SingleCard = () => {
  return (
    <section className="flex h-full">
      <ImageDisplay />
      <div className="flex flex-col justify-between h-full">
        <Description />
        <div className="mt-auto">
          <SingleButton />
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
