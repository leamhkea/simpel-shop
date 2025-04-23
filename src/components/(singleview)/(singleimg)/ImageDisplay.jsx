"use client";
import { useState } from "react";
import Image from "next/image";
const ImageDisplay = () => {
  const [chosenImage, setImageClicked] = useState("/");
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2.5">
        <Image
          className="w-1/4 h-1/4 cursor-pointer"
          width={500}
          height={500}
          alt="miniature photo 1"
          onClick={() => setImageClicked("/")}
          src="/"
        />
        <Image
          className="w-1/4 h-1/4 cursor-pointer"
          width={500}
          height={500}
          alt="miniature photo 2"
          onClick={() => setImageClicked("/")}
          src="/"
        />
        <Image
          className="w-1/4 h-1/4 cursor-pointer"
          width={500}
          height={500}
          alt="miniature photo 3"
          onClick={() => setImageClicked("/")}
          src="/"
        />
      </div>
      <Image src={chosenImage} width={500} height={500} alt="display photo" />
    </div>
  );
};

export default ImageDisplay;
