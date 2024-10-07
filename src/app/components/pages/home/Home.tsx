"use client";

import { DISCORD_INVITE, NAVBAR_HEIGHT_REM } from "@/lib/globalVars";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import HomeSearchBar from "../../UI/HomeSearchBar";
import Stats from "../../HomePage/Stats";
import { getBlogposts } from "@/lib/actions/db/blogpost/read.actions";
import { BlogPost } from "@prisma/client";
import BlogPostPreview from "../../HomePage/BlogPostPreview";
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
    name: "Spell Lists",
    href: "/spell-list",
  },
  {
    name: "Feats",
    href: "/feats",
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [randomImage, setRandomImage] = useState(false);
  useEffect(() => {
    const randomImageChance = 1000; //1/1000 chance of showing a random image
    setRandomImage(Math.floor(Math.random() * randomImageChance) === 0);
    getBlogposts().then((res) => {
      res.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setBlogPosts(res);
    });
  }, []);
  return (
    <main className="p-4 md:p-8 flex flex-col bg-base-100 items-center relative min-h-screen">
      <div className="bg-base-300 p-4 w-full rounded-xl h-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-center">Max&apos;s DnD Wiki</h1>
        <p className="text-center">
          Welcome to the Max&apos;s DnD Wiki! Here you can find information on
          any and all things Dungeons and Dragons 5th Edition.
        </p>
        <div className="divider m-0"></div>
        <div className="flex flex-wrap justify-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="btn m-2">{link.name}</div>
            </Link>
          ))}
        </div>
        <div className="relative flex flex-col justify-center items-center">
          {/* <Image
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
          /> */}

          {/* searchabar */}
          <Suspense>
            <div className="hidden md:flex justify-center items-center ">
              <HomeSearchBar />
            </div>
            <div className="flex md:hidden justify-center items-center ">
              <HomeSearchBar small />
            </div>
          </Suspense>
        </div>
        <div className="w-full flex flex-col md:flex-row  justify-between items-center md:items-end gap-4">
          {/* <Link href={""} className="link link-primary">
            Want to contribute? Click Here!
          </Link> */}
          <Link href={DISCORD_INVITE} className="btn btn-ghost border-gray-500">
            Join our Discord -&gt;
          </Link>
          <div className="flex flex-col items-center ">
            <p>
              <em>Need a character sheet?</em>
            </p>
            <div className="divider m-0"></div>
            <Link
              href={"/dashboard"}
              className="btn btn-secondary font-bold w-[90%] "
            >
              Start here -&gt;
            </Link>
          </div>
        </div>
        <div className="divider m-0"></div>
      </div>
      <h2 className="text-center my-8 divider divider-primary">Whats New</h2>
      <div className="grid grid-cols-12 w-full gap-4">
        <section className="col-span-12 md:col-span-7 xl:col-span-4 lg:col-span-5 row-span-1 md:row-span-2 xl:row-span-3 bg-base-300 p-4 rounded-xl">
          <Stats />
        </section>
        <section className="col-span-12 md:col-span-5 xl:col-span-8 lg:col-span-7 row-span-1  bg-base-300 p-4 rounded-xl">
          {/* blogpost 1 */}
          {blogPosts[0] && <BlogPostPreview blogPost={blogPosts[0]} />}
        </section>
        <section className="col-span-12 md:col-span-5 xl:col-span-8 lg:col-span-7 row-span-1 bg-base-300 p-4 rounded-xl ">
          {/* blogpost 2 */}
          {blogPosts[1] && <BlogPostPreview blogPost={blogPosts[1]} />}
        </section>
        <section className="col-span-12 md:col-span-12  lg:col-span-12  xl:col-span-8 row-span-1 bg-base-300 p-4 rounded-xl">
          <div className="bg-base-300 p-4 rounded-xl w-full flex flex-col">
            <h3 className="text-center divider">Latest Update: Feats</h3>
            <time className="text-center w-full italic">October 5st, 2024</time>
            <ul className="list-disc list-inside">
              <li>
                Added every feat (yes all of them). A total of 108. See them{" "}
                <Link href="/feats" className="text-primary hover:link">
                  here.
                </Link>
              </li>
              <li>Moved Spellist to Spells on navbar</li>
              <li>
                You now log out automatically 48 hours after logging in. (before
                it was an hour)
              </li>
              <li>
                Tooltips no longer overflow on most containers. This should fix
                most of the jankiness when interacting with them.
              </li>
            </ul>

            <div className="divider"></div>
            <time className="text-center w-full italic">October 4st, 2024</time>
            <ul className="list-disc list-inside">
              <li>Custom Weapon Attacks on character sheet</li>
              <li>Added 12 more Species and 6 subspecies</li>
              <li>Added 23 Backgrounds</li>
              <li>Feats Page and Search Page</li>
            </ul>
            <div className="divider">
              <Link
                href="/changelog"
                className="btn btn-ghost border border-gray-500"
              >
                View all changes -&gt;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
