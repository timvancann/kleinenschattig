import img1 from "@/public/kiera/20240615-_DSC2446-Enhanced-NR.jpg";
import img2 from "@/public/kiera/20240615-_DSC2370-Enhanced-NR.jpg";
import img3 from "@/public/kiera/20240615-_DSC2363-Enhanced-NR.jpg";
import img4 from "@/public/kiera/20240615-_DSC2404-Enhanced-NR.jpg";
import img5 from "@/public/kiera/20240615-_DSC2414-Enhanced-NR.jpg";
import img6 from "@/public/kiera/20240615-_DSC2439-Enhanced-NR.jpg";
import Image from "next/image";
import React from "react";
import { Title } from "@/components/Title";

const images = [
  img1,
  img6,
  img2,
  img3,
  img6,
  img4,
  img5,
  img6,
  img1,
  img6,
  img2,
  img3,
  img6,
  img4,
  img6,
  img5,
  img6,
  img1,
];

export default function Portfolio() {
  return (
    <div className={"mx-auto mt-[2rem] lg:mt-[10rem] max-w-7xl"}>
      <Title title={"portfolio"} />
      <MasonryGrid />
    </div>
  );
}

const MasonryGrid = () => {
  return (
    <div
      className={
        "mx-auto columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4"
      }
    >
      {images.map((image, index) => (
        <div key={index} className={"mb-4 break-inside-avoid"}>
          <Image
            src={image}
            alt={"placeholder"}
            className={"w-full rounded-md object-cover"}
            width={200}
          />
        </div>
      ))}
    </div>
  );
};
