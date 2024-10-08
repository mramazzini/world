"use client";
import { topPages } from "@/app/topPages";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/lib/string.extensions";
import Link from "next/link";
import numPlace from "@/lib/utils/numPlace";
type Tab =
  | "class"
  | "background"
  | "item"
  | "subclass"
  | "species"
  | "subspecies";

const Stats = () => {
  const [tab, setTab] = useState<Tab>("species");
  const classImg = "/cleric.webp";
  const backgroundImg = "/runecarver.webp";
  const itemImg = "/chainmail.webp";
  const subclassImg = "/horizonwalker.webp";
  const speciesImg = "/aasimar.webp";
  const subspeciesImg = "/stouthalfling.webp";
  useEffect(() => {
    const random = Math.floor(Math.random() * 6);
    const tabs: Tab[] = [
      "class",
      "background",
      "item",
      "subclass",
      "species",
      "subspecies",
    ];
    setTab(tabs[random]);
  }, []);
  return (
    <>
      <h2 className="text-center divider mb-4">
        September&apos;s Top Selections
      </h2>
      {Object.entries(topPages).map(
        ([category, pages]) =>
          category == tab && (
            <div
              key={category}
              className="w-full flex-col flex items-center gap-4"
            >
              <p className="text-center">
                September&apos;s most viewed {category.toCapitalCase()} is:
              </p>
              <h3 className="badge badge-neutral badge-lg text-xl p-4 m-0 capitalize">
                🥇 {pages[0].page.split("/")[2].replaceAll("-", " ")} 🥇
              </h3>
              <Link
                href={`${pages[0].page}`}
                className="text-primary hover:link divider m-0"
              >
                Take me there! -&gt;
              </Link>
              <Image
                src={`/home${
                  category == "class"
                    ? classImg
                    : category == "background"
                    ? backgroundImg
                    : category == "item"
                    ? itemImg
                    : category == "subclass"
                    ? subclassImg
                    : category == "species"
                    ? speciesImg
                    : subspeciesImg
                }`}
                alt={category}
                width={1024}
                height={1024}
                className="w-[512px] object-cover rounded-xl h-[512px] mx-auto"
              />
              <h4 className="text-center divider m-0 text-xl">Top 5:</h4>

              <ul className=" text-left w-full">
                {pages.slice(0, 5).map((page, index) => (
                  <li key={page.page} className="w-full flex flex-col">
                    <p className="flex flex-row justify-between items-center capitalize">
                      <span>
                        {numPlace(index + 1)}.{" "}
                        {page.page.split("/")[2].replaceAll("-", " ")}{" "}
                        {index == 0
                          ? "🥇"
                          : index == 1
                          ? "🥈"
                          : index == 2
                          ? "🥉"
                          : ""}
                      </span>
                      <Link className="btn btn-accent btn-sm" href={page.page}>
                        Read More -&gt;
                      </Link>
                    </p>
                    <div className="divider m-0"></div>
                  </li>
                ))}
              </ul>
            </div>
          )
      )}
    </>
  );
};

export default Stats;
