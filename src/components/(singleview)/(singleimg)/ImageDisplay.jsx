"use client";
import { useState } from "react";
import Image from "next/image";
const ImageDisplay = ({ images }) => {
  const [chosenImage, setImageClicked] = useState(`${images[0]}`);
  return (
    <div className="flex">
      <div className="flex flex-col gap-2.5">
        <Image
          className="w-1/4 h-1/4 cursor-pointer"
          width={200}
          height={200}
          alt="miniature photo 1"
          onClick={() => setImageClicked(`${images[0]}`)}
          src={images[0]}
        />
        <Image
          className="w-1/4 h-1/4 cursor-pointer"
          width={200}
          height={200}
          alt="miniature photo 2"
          onClick={() => setImageClicked(`${images[1]}`)}
          src={images[1]}
        />
        <Image
          className="w-1/4 h-1/4 cursor-pointer"
          width={200}
          height={200}
          alt="miniature photo 3"
          onClick={() => setImageClicked(`${images[2]}`)}
          src={images[2]}
        />
      </div>
      <Image
        src={chosenImage}
        width={400}
        height={400}
        alt="display photo"
        className="object-contain max-w-full max-h-[400px]"
      />
    </div>
  );
};

export default ImageDisplay;
