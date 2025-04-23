import ImageDisplay from "./(singleimg)/ImageDisplay";
import Description from "./(details)/Description";
import SingleButton from "./(details)/SingleButton";
import SizeDropdown from "./(details)/SizeDropdown";

const SingleCard = () => {
  return (
    <section>
      <ImageDisplay></ImageDisplay>
      <article>
        <Description></Description>
        <SizeDropdown></SizeDropdown>
        <SingleButton></SingleButton>
      </article>
    </section>
  );
};

export default SingleCard;
