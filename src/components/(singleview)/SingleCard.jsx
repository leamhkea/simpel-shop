import ImageDisplay from "./(singleimg)/ImageDisplay";
import Description from "./(details)/Description";
import SingleButton from "./(details)/SingleButton";

const SingleCard = () => {
  return (
    <section className="flex">
      <ImageDisplay></ImageDisplay>
      <div>
        <Description></Description>
        <SingleButton></SingleButton>
      </div>
    </section>
  );
};

export default SingleCard;
