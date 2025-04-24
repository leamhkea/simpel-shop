import SingleCard from "@/components/(singleview)/SingleCard";

export default async function SingleView({ params }) {
  const { id } = await params;

  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await data.json();

  return (
    <section>
      <SingleCard {...productData.product} product={productData.product} />
    </section>
  );
}
