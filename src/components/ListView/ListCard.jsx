import Image from "next/image";
import Link from "next/link";

const ListCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <li className="bg-(--white) mb-4 min-h-100 px-2 shadow-md hover:scale-105 transition-all duration-300">
        <Image
          alt={`Billede af ${product.title}`}
          width={1000}
          height={1000}
          src={product.thumbnail}
          className=""
        />
        <div className="px-2 py-2 flex justify-between items-top">
          <div>
            <h3 className="font-bold">{product.title}</h3>
            <h3>{product.brand}</h3>
          </div>
          <h3>{product.price}$</h3>
        </div>
      </li>
    </Link>
  );
};

export default ListCard;
