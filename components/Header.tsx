"use client";

import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { socials } from "@/components/Footer";

type Link = {
  name: string;
  hash: string;
};
const links: Link[] = [
  { name: "Portfolio", hash: "/portfolio" },
  { name: "Over", hash: "/over" },
  { name: "Tarieven", hash: "/tarieven" },
  { name: "Contact", hash: "/contact" },
];

export const MobileNav = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className={"inset-x-0 top-0 flex h-20 lg:hidden"}>
      <div className={"ml-3 mt-3"}>
        <Logo />
      </div>
      <div
        className={
          "container mx-auto flex h-full items-center justify-end px-4"
        }
      >
        <div className={"relative z-10 opacity-60"}>
          <motion.button
            className={"flex flex-col space-y-1"}
            animate={mobileNav ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              className={"block h-[2px] w-6 bg-stone-700"}
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className={"block h-[2px] w-6 bg-stone-700"}
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              className={"block h-[2px] w-6 bg-stone-700"}
            />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
              duration: 0.1,
            }}
          >
            <motion.div
              key={"mobile-nav"}
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.1,
                  },
                },
                closed: {
                  x: "+100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.1,
                  },
                },
              }}
              initial={"closed"}
              animate={"open"}
              exit={"closed"}
              className={`fixed inset-0 mx-auto flex flex-col justify-center space-y-10 p-6 text-right backdrop-blur-lg`}
            >
              <motion.div
                variants={{
                  closed: { y: "25%", opacity: 0 },
                  open: { y: "0%", opacity: 1 },
                }}
              >
                <div
                  className={"container mx-auto mb-10 items-center text-center"}
                >
                  <LogoInMenu />
                </div>
                <ul className={""}>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a className={"text-4xl font-bold"} href={link.hash}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  closed: { y: "25%", opacity: 0 },
                  open: { y: "0%", opacity: 1 },
                }}
                className={"h-px w-full bg-stone-600/50"}
              />
              <motion.div
                variants={{
                  closed: { y: "25%", opacity: 0 },
                  open: { y: "0%", opacity: 1 },
                }}
                className={"space-x-6"}
              >
                {socials.map((social, index) => (
                  <SocialIcon
                    key={index}
                    url={`https://${social}`}
                    fgColor={"rgba(255, 255, 255, 0.5 )"}
                    bgColor={"rgba(0, 0, 0, 0.5)"}
                    className={"h-40 w-40"}
                  />
                ))}
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const FullScreenNav = () => {
  return (
    <nav
      className={
        "absolute top-0 -mb-[8rem] hidden h-[8rem] w-full flex-row justify-between lowercase tracking-wide text-stone-950 lg:flex"
      }
    >
      <div className={"m-8 ml-10"}>
        <Logo />
      </div>
      <ul className={"mr-10 flex flex-row items-center justify-center gap-6"}>
        {links.map((link, index) => (
          <li key={link.name}>
            <div className={"flex flex-row items-center"}>
              <a
                href={link.hash}
                className={
                  "cursor-pointer text-lg font-bold opacity-65 transition-all hover:text-stone-800 hover:overline"
                }
              >
                {link.name}
              </a>
              {index !== links.length - 1 && (
                <div className={"ml-6 h-[8px] w-[1px] bg-stone-900/40"} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const LogoInMenu = () => {
  return (
    <a href={"/"} className={"cursor-pointer items-center"}>
      <h1
        className={`text-nowrap text-3xl font-bold lowercase tracking-widest`}
      >
        Klein en Schattig
        <div
          className={
            "mx-auto flex w-[270px] flex-row items-center justify-between"
          }
        >
          <div className={"mx-2 h-[1px] w-[20px] bg-stone-900"} />
          <h2
            className={`font -mt-1 text-nowrap text-base font-semibold uppercase tracking-[10px] sm:text-base`}
          >
            Fotografie
          </h2>
          <div className={"mx-2 mr-3 h-[1px] w-[20px] bg-stone-900"} />
        </div>
      </h1>
    </a>
  );
};

const Logo = () => {
  return (
    <a href={"/"} className={"cursor-pointer"}>
      <h1
        className={`text-nowrap text-3xl font-bold lowercase tracking-widest lg:text-5xl`}
      >
        Klein en Schattig
        <div className={"flex flex-row items-center justify-between"}>
          <div className={"mx-2 h-[1px] w-[20px] bg-stone-900 lg:w-[40px]"} />
          <h2
            className={`font -mt-1 text-nowrap text-base font-semibold uppercase tracking-[10px] lg:text-base`}
          >
            Fotografie
          </h2>
          <div
            className={"mx-2 mr-3 h-[1px] w-[20px] bg-stone-900 lg:w-[40px]"}
          />
        </div>
      </h1>
    </a>
  );
};
