"use client";

import dynamic from "next/dynamic";

const BasketCard = dynamic(() => import("@/components/Basket/BasketCard"), {
  loading: () => <p>Loading cart...</p>,
  ssr: false,
});

const Basket = () => {
  return (
    <section className="px-(--content-width)">
      <BasketCard />
    </section>
  );
};

export default Basket;
