"use client";
import img1 from "@/public/kiera/20240615-_DSC2446-Enhanced-NR.jpg";
import img2 from "@/public/kiera/20240615-_DSC2370-Enhanced-NR.jpg";
import img3 from "@/public/kiera/20240615-_DSC2363-Enhanced-NR.jpg";
import img4 from "@/public/kiera/20240615-_DSC2404-Enhanced-NR.jpg";
import img5 from "@/public/kiera/20240615-_DSC2414-Enhanced-NR.jpg";
import img6 from "@/public/kiera/20240615-_DSC2439-Enhanced-NR.jpg";
import Image from "next/image";

const images = [img1, img6, img2, img3, img6, img4, img5, img6, img1, img6, img2, img3, img6, img4, img6, img5, img6, img1];

export default function Portfolio() {
  return <MasonryGrid/>
}

const MasonryGrid = () => {
  return (
    <div className={"mt-[10rem] mx-auto columns-5 py-20 gap-4 px-20 max-w"}>
      {images.map((image, index) => (
        <div key={index} className={"mb-4 break-inside-avoid"}>
          <Image src={image} alt={"placeholder"} className={"object-cover w-full rounded-md"} width={200}/>
        </div>
      ))}
    </div>
  )
}