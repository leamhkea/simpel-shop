"use client";
import { useState } from "react";
import Image from "next/image";
const ImageDisplay = () => {
    const [chosenImage, setImageClicked] = useState("/");
  return <div>
         <Image src={chosenImage} width={500} height={500} alt="watch" />
         <div className="flex gap-2.5 justify-center">
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/black_watch.png")}
          src="/images/black_watch.png"
        />
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/blue_watch.png")}
          src="/images/blue_watch.png"
        />
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/pink_watch.png")}
          src="/images/pink_watch.png"
        />
      </div>
    </div>
  </div>;
};

export default ImageDisplay;



"use client";
import { useState } from "react";
import Image from "next/image";
const Heroimg = () => {
  const [chosenWatch, setWatchClicked] = useState("/images/black_watch.png");
  const [activeColor, setActivecolor] = useState("bg-slate-950");
  return (
    <div>
      <div className="flex items-center">
        <Image src={chosenWatch} width={500} height={500} alt="watch" />
        <div className="flex flex-col gap-5 cursor-pointer">
          <div
            onClick={() => setActivecolor(chosenWatch)}
            className={`w-5 h-5 rounded-full border-2 border-white bg-slate-950 ${
              chosenWatch == activeColor ? "border-3" : ""
            }`}
          ></div>

          <div
            onClick={() => setActivecolor(chosenWatch)}
            className={`w-5 h-5 rounded-full border-2 border-white bg-green-200 ${
              chosenWatch == activeColor ? "border-3" : ""
            }`}
          ></div>

          <div
            onClick={() => setActivecolor(chosenWatch)}
            className={`w-5 h-5 rounded-full border-2 border-white bg-pink-400 ${
              chosenWatch == activeColor ? "border-3" : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="flex gap-2.5 justify-center">
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/black_watch.png")}
          src="/images/black_watch.png"
        />
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/blue_watch.png")}
          src="/images/blue_watch.png"
        />
        <Image
          className="w-1/4 h-1/4"
          width={500}
          height={500}
          alt="watch"
          onClick={() => setWatchClicked("/images/pink_watch.png")}
          src="/images/pink_watch.png"
        />
      </div>
    </div>
  );
};

export default Heroimg;