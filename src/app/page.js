import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Image
        className="h-full w-full mt-15"
        width={1000}
        height={1000}
        alt="image of woman wearing beige clothes"
        src="./hero.webp"
      />
      <div className="absolute top-100 left-10">
        <h1 className="uppercase font-extrabold">simpel shop</h1>
        <h2 className="font-semibold">
          Shop everything from fashion to groceries
        </h2>
        <a
          className="py-3 flex gap-2 bg-(--black) text-(--white) text-center rounded-4xl w-50 items-center justify-center mt-5 hover:scale-105 transition-all duration-300 uppercase"
          href="/products"
        >
          shop now
        </a>
      </div>
    </section>
  );
}
