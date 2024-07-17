"use client";
import { useState, useEffect } from "react";
import { DBmetaData, Pages } from "@/lib/types";
import { getClassMeta } from "@/lib/actions/db/read.actions";
import { Class } from "@prisma/client";
import "@/lib/string.extensions";
import Link from "next/link";

const SelectClass = () => {
  const [data, setData] = useState<DBmetaData[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getClassMeta().then((res) => {
      setLoading(false);
      setData(res);
    });
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>Classes</h1>
          <p className="italic ">
            Classes are your characters profession. They are the backbone of
            your character and determine what abilities you have access to. As
            you level up, you will gain new abilities and features through your
            class.
          </p>
        </div>
        <div className="flex items-center my-2">
          <Link
            className={"btn btn-ghost border border-gray-500"}
            href={"#homebrew"}
          >
            View Homebrew Classes -&gt;
          </Link>
        </div>
      </div>
      <div className="divider" />
      {/* <Link className="btn btn-primary" href={"/class/create"}>
        Create Class
      </Link> */}
      {loading && <div className="loading loading-lg" />}
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[5%] ">Name</th>
            <th className="text-left bg-black/20 w-[50%] hidden md:table-cell">
              Description
            </th>
            <th className="text-left bg-black/20 w-[10%] hidden md:table-cell">
              Subclass
            </th>
            <th className="text-left bg-black/20 w-[20%] ">Source</th>
            <th className="text-left bg-black/20 w-[10%] hidden sm:table-cell">
              Last Updated
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="cursor-pointer hover"
                onClick={() => {
                  window.location.href = `/class/${item.name}`;
                }}
              >
                <td>
                  <Link
                    href={`/class/${item.name}`}
                    className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                    {item.name.toCapitalCase()}
                  </Link>
                </td>
                <td className="hidden md:table-cell">
                  <p className="italic line-clamp-2 "> {item.description}</p>
                </td>
                <td
                  className="cursor-pointer hover:bg-black/20 hidden md:table-cell"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/class/${item.name}/subclass`;
                  }}
                >
                  <p className="line-clamp-2 ">
                    <Link
                      href={`/class/${item.name}/subclass`}
                      className="text-blue-500 hover:text-blue-700 font-bold "
                    >
                      {item.subClassName}
                    </Link>
                  </p>
                </td>
                <td>{item.source}</td>
                <td className="hidden sm:table-cell">
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
        Classes created by the community. These are unnofficial and may be
        unbalanced. Ask your Dungeon Master before using them in your game.
      </p>
      <div className="divider" />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[5%] ">Name</th>
            <th className="text-left bg-black/20 w-[50%] hidden md:table-cell">
              Description
            </th>
            <th className="text-left bg-black/20 w-[10%]">Subclass</th>
            <th className="text-left bg-black/20 w-[20%]">Source</th>
            <th className="text-left bg-black/20 w-[10%]">Last Updated</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default SelectClass;
