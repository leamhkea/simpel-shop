import ListClient from "./ListClient";

const ListServer = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();

  console.log(products);

  return <ListClient data={products} />;
};

export default ListServer;
