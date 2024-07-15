"use client";
import { usePathname } from "next/navigation";
import "@/lib/string.extensions";

import { useState, useEffect } from "react";

import { SubClass } from "@prisma/client";
import Link from "next/link";
import { DBInfo } from "@/lib/types";
import { getSubClassMeta } from "@/lib/actions/db/read.actions";
const Page = () => {
  const router = usePathname();
  const className = router.split("/")[2];
  const [data, setData] = useState<DBInfo[] | null>(null);
  useEffect(() => {
    getSubClassMeta(className).then((res) => {
      setData(res);
    });
  }, [className]);
  return (
    <main className="p-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-4/5">
          <h1>{className.toCapitalCase()} Subclasses</h1>
          <p className="italic">
            Subclasses are a further specialization of your class. They provide
            additional abilities and features that are unique to your character.
            As you level up, you will gain new abilities and features through
            your subclass.
          </p>
        </div>
        <div className="flex justify-center flex-col ">
          <Link
            className={"btn btn-ghost mb-2 border border-gray-500"}
            href={"#homebrew"}
          >
            View Homebrew Subclasses -&gt;
          </Link>
          <Link
            className={"btn btn-ghost border border-gray-500"}
            href={`/class/${className}`}
          >
            View {className.toCapitalCase()} Classes -&gt;
          </Link>
        </div>
      </div>
      <div className="divider" />
      {!data && <span className="loading" />}

      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[8%]">Name</th>
            <th className="text-left bg-black/20">Description</th>
            <th className="text-left bg-black/20 w-[8%]">Source</th>
            <th className="text-left bg-black/20 w-[8%]">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="cursor-pointer hover"
                  onClick={() => {
                    window.location.href = `/class/${className}/subclass/${item.name.replaceAll(
                      " ",
                      "-"
                    )}`;
                  }}
                >
                  <td>
                    <Link
                      href={`/class/${className}/subclass/${item.name.replaceAll(
                        " ",
                        "-"
                      )}`}
                      className="text-blue-500 hover:text-blue-700 font-bold"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="italic">{item.description}</td>
                  <td>Player&apos;s Handbook</td>
                  <td>
                    {item.updatedAt.getDate()}/{item.updatedAt.getMonth()}/
                    {item.updatedAt.getFullYear()}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* Homebrew */}
      <div className="divider" />
      <h2 id="homebrew">Homebrew</h2>
      <p className="italic">
        Homebrew subclasses are created by the community. They are not official
        content and should be reviewed by your Dungeon Master before being used
        in a campaign.
      </p>
      <div className="divider" />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[8%] ">Name</th>
            <th className="text-left bg-black/20 ">Description</th>
            <th className="text-left bg-black/20 w-[8%]">Source</th>
            <th className="text-left bg-black/20 w-[8%]">Last Updated</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </main>
  );
};

export default Page;
