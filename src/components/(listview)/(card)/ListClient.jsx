"use client";
import ListCard from "./ListCard";
const ListClient = ({ data }) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {data.products.map((product) => (
        <ListCard key={product.id} product={product}></ListCard>
      ))}
    </ul>
  );
};

export default ListClient;
