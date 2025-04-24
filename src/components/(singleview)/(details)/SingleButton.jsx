import { BsBasket2 } from "react-icons/bs";

const SingleButton = () => {
  return (
    <button className="py-3 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-full items-center justify-center mt-5">
      Add to basket <BsBasket2 size={20} />
    </button>
  );
};

export default SingleButton;
