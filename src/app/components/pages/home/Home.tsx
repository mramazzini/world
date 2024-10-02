"use client";

import { DISCORD_INVITE, NAVBAR_HEIGHT_REM } from "@/lib/globalVars";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
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
    name: "Species",
    href: "/species",
  },
  {
    name: "Subspecies",
    href: "/subspecies",
  },
  {
    name: "Items",
    href: "/item",
  },
];

const HomePage = () => {
  const [randomImage, setRandomImage] = useState(false);
  useEffect(() => {
    const randomImageChance = 1000; //1/1000 chance of showing a random image
    setRandomImage(Math.floor(Math.random() * randomImageChance) === 0);
  }, []);
  return (
    <main className="p-4 md:p-8 flex flex-col bg-base-100 items-center relative min-h-screen">
      <div className="bg-base-300 p-4 w-full rounded-xl h-full">
        <h1 className="text-center">Max&apos;s DnD Wiki</h1>
        <p className="text-center">
          Welcome to the Max&apos;s DnD Wiki! Here you can find information on
          any and all things Dungeons and Dragons 5th Edition.
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
            src={"/images/alternateHero.png"}
            alt={"Dragon fighter adventurers"}
            className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover mx-auto m-12"
            style={{
              display: randomImage ? "block" : "none",
            }}
            priority
            width={1440}
            height={1920}
          />

          <Image
            src={"/images/hero.jpg"}
            alt={"Dragon fighter adventurers"}
            className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover mx-auto m-12"
            style={{
              display: randomImage ? "none" : "block",
            }}
            priority
            width={1440}
            height={1920}
          />

          {/* searchabar */}
          <Suspense>
            <div className="hidden md:flex justify-center items-center">
              <HomeSearchBar />
            </div>
            <div className="flex md:hidden justify-center items-center">
              <HomeSearchBar small />
            </div>
          </Suspense>
        </div>
        <div className="w-full flex justify-between items-center mt-12">
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
