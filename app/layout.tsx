import type {Metadata} from "next";
import {Inter, Raleway} from "next/font/google";
import "./globals.css";

import banner from "../public/kiera/20240615-_DSC2439-Enhanced-NR.jpg";
import portfolio from "../public/kiera/20240615-_DSC2446-Enhanced-NR.jpg";

import {StaticImageData} from "next/dist/shared/lib/get-img-props";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const raleway = Raleway({subsets: ['latin']})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${raleway.className} bg-stone-200 text-stone-800 min-h-[calc(100vh-10rem)]
`}>
    <main>
      <Header/>
      {children}
    </main>
    </body>
    </html>
  );
}

const Logo = () => {
  return <div className={"flex flex-col p-8 max-w-sm"}>
    <a href={"/"} className={"cursor-pointer"}>
      <h1 className={`text-2xl sm:text-4xl font-bold text-nowrap lowercase tracking-widest`}>Klein en
        Schattig
        <div className={"flex flex-row justify-between items-center"}>
          <div className={"w-[40px] h-[1px] bg-stone-900 mx-4"}/>
          <h2
            className={`text-base sm:text-base  font -mt-1 uppercase font-semibold tracking-[10px] text-nowrap `}>Fotografie</h2>
          <div className={"w-[40px] h-[1px] bg-stone-900 mx-4 mr-4"}/>
        </div>
      </h1>
    </a>
  </div>
}


type Link = {
  name: string,
  hash: string
}

const Header = () => {
  const links: Link[] = [
    {name: "Portfolio", hash: "/portfolio"},
    {name: "Over", hash: "/over"},
    {name: "Tarieven", hash: "/tarieven"},
    {name: "Contact", hash: "/contact"},
  ]

  return <nav
    className={"absolute w-full bg-stone-300/30 text-stone-950 top-0 h-[8rem] tracking-wide lowercase backdrop-blur-2xl flex flex-row justify-between"}>
    <Logo/>
    <ul className={"flex flex-row gap-6 items-center justify-center mr-6"}>
      {links.map((link, index) =>
        <li key={link.name}>
          <div className={"flex flex-row items-center"}>
            <a href={link.hash}
               className={"text-lg font-bold cursor-pointer text-stone-950/40 hover:text-stone-800 hover:overline transition-all"}>
              {link.name}
            </a>
            {(index !== links.length - 1) &&
              <div className={"w-[1px] h-[8px] bg-stone-900/40 ml-6"}/>

            }
          </div>
        </li>
      )
      }
    </ul>
  </nav>
}
