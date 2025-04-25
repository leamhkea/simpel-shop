import SingleCard from "@/components/SingleView/SingleCard";

export default async function SingleView({ params }) {
  const { id } = await params;

  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await data.json();

  return (
    <section>
      <SingleCard product={productData} />
    </section>
  );
}
