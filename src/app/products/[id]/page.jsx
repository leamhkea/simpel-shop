import SingleCard from "@/components/SingleView/SingleCard";
import ReviewsCard from "@/components/SingleView/ReviewsCard";

export default async function SingleView({ params }) {
  const { id } = await params;

  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const productData = await data.json();

  return (
    <>
      <section className="px-(--content-width) mt-30">
        <SingleCard product={productData} />
      </section>
      <section className="px-(--content-width) mt-10">
        <ReviewsCard product={productData} />
      </section>
    </>
  );
}
