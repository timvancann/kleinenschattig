import React from "react";
import banner from "@/public/kiera/20240615-_DSC2439-Enhanced-NR.jpg";
import portfolio from "@/public/kiera/20240615-_DSC2446-Enhanced-NR.jpg";
import {StaticImageData} from "next/dist/shared/lib/get-img-props";


export default function Home() {
  return (
    <Hero/>
  );
}

const Hero = () => {
  return (
    <div
      className={"flex flex-col justify-between h-screen items-center mx-auto bg-cover bg-no-repeat overflow-hidden overflow-y-hidden"}>
      <div className={"overflow-hidden"}>
        <HeroImage/>
      </div>
      {/*<CallOuts/>*/}
    </div>
  )
}

const HeroImage = () => {
  return (
    <img
      src={banner.src}
      alt={"placeholder"}
      className={`object-cover h-screen min-h-full w-screen`}/>
  )
}

const CallOuts = () => {
  return <div className={"flex flex-row gap-16 items-center justify-center"}>
    <CallOut title={"Portfolio"} image={portfolio}/>
    <CallOut title={"Portfolio"} image={portfolio}/>
    <CallOut title={"Portfolio"} image={portfolio}/>
  </div>
}

const CallOut = ({title, image}: { title: string, image: StaticImageData }) => {
  return <div className={"relative mx-auto max-w-xl"}>
    <img src={image.src} alt={"placeholder"} className={"object-cover w-60 h-60 rounded-lg"}/>
    <div className={"absolute inset-0 items-center justify-center"}>
      <h2 className={"font-bold text-xl py-1 px-2 mix-blend-color-dodge invert lowercase tracking-[5px]"}>{title}</h2>
    </div>
  </div>
}

