"use client";

import { DISCORD_INVITE, NAVBAR_HEIGHT_REM } from "@/lib/globalVars";
import { QueryParams } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HomeSearchBar from "../../UI/HomeSearchBar";
const links = [
  {
    name: "Classes",
    href: "/class",
  },
  {
    name: "Subclasses",
    href: "/subclass",
  },
  {
    name: "Spells",
    href: "/spells",
  },
  {
    name: "Backgrounds",
    href: "/background",
  },
  {
    name: "Races",
    href: "/race",
  },
  {
    name: "Subraces",
    href: "/subrace",
  },
  {
    name: "Tools",
    href: "/tool",
  },
];

const HomePage = () => {
  const [currentQueryString, setCurrentQueryString] = useState("");

  return (
    <main className="p-4 md:p-8 flex flex-col bg-base-100 items-center relative min-h-screen">
      <div className="bg-base-300 p-4 w-full rounded-xl h-full">
        <h1 className="text-center">Max's DnD Wiki</h1>
        <p className="text-center">
          Welcome to the DnD Wiki! Here you can find information on any and all
          things Dungeons and Dragons 5th Edition.
        </p>
        <div className="divider"></div>
        <div className="flex flex-wrap justify-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="btn m-2">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src={"/images/hero.jpg"}
            alt={"Dragon fighter adventurers"}
            className=" w-96 h-96 rounded-full object-cover mx-auto m-12"
            width={1440}
            height={1920}
          />
          {/* searchabar */}
          <HomeSearchBar />
        </div>
        <div className="w-full flex justify-between items-center">
          {/* <Link href={""} className="link link-primary">
            Want to contribute? Click Here!
          </Link> */}
          <Link href={DISCORD_INVITE} className="btn btn-primary">
            Join our Discord -&gt;
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
