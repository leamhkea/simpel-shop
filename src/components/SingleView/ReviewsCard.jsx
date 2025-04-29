import ReviewDesc from "./ReviewDesc";

const ReviewsCard = ({ product }) => {
  return (
    <section className="flex flex-wrap flex-col gap-8 bg-(--white) px-10 py-10 mb-16 shadow-md">
      <h2 className="font-bold">Reviews</h2>
      <ReviewDesc reviews={product.reviews} />
    </section>
  );
};

export default ReviewsCard;
