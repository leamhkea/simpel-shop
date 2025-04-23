import Image from "next/image";

const ListCard = () => {
  return (
    <div className="group">
      <Image></Image>
      <div className="hidden group-hover:block bg-(--white) px-2 py-1 duration-500">
        <ul className="flex items-baseline gap-2">
          <li>
            <h3>Size:</h3>
          </li>
          <li>
            <p>S</p>
          </li>
          <li>
            <p>M</p>
          </li>
          <li>
            <p>L</p>
          </li>
        </ul>
      </div>
      <div className="bg-(--white) px-2 py-2 flex justify-between items-top">
        <div>
          <h2>name</h2>
          <h3>brand</h3>
        </div>
        <h3>price</h3>
      </div>
    </div>
  );
};

export default ListCard;
