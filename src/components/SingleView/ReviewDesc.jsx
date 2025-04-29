import { IoMdStar } from "react-icons/io";

const ReviewDesc = ({ reviews }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap gap-4 px-10 py-10 shadow-md w-70 items-center"
          >
            <div className="flex items-center gap-1">
              {/* Map over review.ratings som viser udfyldte stjerne ud fra antallet af ratings */}
              {Array.from({ length: 5 }, (_, i) => (
                <IoMdStar
                  key={i}
                  className={
                    i < review.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </div>

            <h3 className="italic">"{review.comment}"</h3>

            <p>{review.reviewerName}</p>

            <p className="text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewDesc;
