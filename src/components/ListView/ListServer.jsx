import ListClient from "./ListClient";

const ListServer = async () => {
  const data = await fetch("https://dummyjson.com/products?limit=1000");
  const products = await data.json();

  return (
    <div>
      <ListClient data={products} />
    </div>
  );
};

export default ListServer;
