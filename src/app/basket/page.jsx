"use client";

import dynamic from "next/dynamic";

const BasketCard = dynamic(() => import("@/components/Basket/BasketCard"), {
  loading: () => <p>Loading cart...</p>, // Loading-indikator
  ssr: false, // Slår server-side rendering fra for denne komponent
});

const Basket = () => {
  return (
    <section className="px-(--content-width)">
      <BasketCard />
    </section>
  );
};

export default Basket;
