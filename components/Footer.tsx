import { SocialIcon } from "react-social-icons";
import React from "react";

export const socials = ["www.instagram.com", "www.facebook.com"];

const Socials = () => {
  return (
    <div className={"mr-6 flex flex-row gap-6"}>
      {socials.map((social, index) => (
        <SocialIcon
          key={index}
          url={`https://${social}`}
          fgColor={"rgba(255, 255, 255, 0.5 )"}
          bgColor={"rgba(0, 0, 0, 0.5)"}
          className={"h-40 w-40"}
        />
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <div
      className={`bottom-5 right-5 hidden justify-end bg-stone-300/0 lowercase tracking-wide text-black lg:fixed lg:flex`}
    >
      <Socials />
    </div>
  );
};
