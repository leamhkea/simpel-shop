"use client";
import { useState } from "react";
import Image from "next/image";

const ImageDisplay = ({ images }) => {
  const [chosenImage, setImageClicked] = useState(images[0] || "");

  return (
    <div className="flex">
      <div className="flex flex-col gap-2.5">
        {images.slice(0, 3).map((img, index) => (
          <Image
            key={index}
            className="cursor-pointer"
            width={100}
            height={100}
            alt={`miniature photo ${index + 1}`}
            onClick={() => setImageClicked(img)}
            src={img}
          />
        ))}
      </div>
      {chosenImage && (
        <Image
          src={chosenImage}
          width={400}
          height={400}
          alt="display photo"
          className="object-contain max-w-full max-h-[400px]"
        />
      )}
    </div>
  );
};

export default ImageDisplay;
