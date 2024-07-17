"use client";
import { useState, useEffect } from "react";
import { DBmetaData, Pages } from "@/lib/types";
import { getClassMeta } from "@/lib/actions/db/read.actions";

import "@/lib/string.extensions";
import Link from "next/link";

import { useRouter } from "next/navigation";

const SelectHomebrewClassPage = () => {
  const router = useRouter();
  const [data, setData] = useState<DBmetaData[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getClassMeta().then((res) => {
      setLoading(false);
      setData(res);
    });
  }, []);

  return (
    <main className="p-8">
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>Homebrew Classes</h1>
          <p className="italic">
            Classes created by the community. These are unnofficial and may be
            unbalanced. Ask your Dungeon Master before using them in your game.
          </p>
        </div>
        <div className="flex items-center my-2">
          <Link
            href={`/class`}
            className={"btn btn-ghost border border-gray-500"}
          >
            View Official Classes -&gt;
          </Link>
        </div>
      </div>
      <div className="divider" />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[5%] ">Name</th>
            <th className="text-left bg-black/20 w-[50%] hidden md:table-cell">
              Description
            </th>
            <th className="text-left bg-black/20 w-[10%]">Subclass</th>
            <th className="text-left bg-black/20 w-[20%]">User</th>
            <th className="text-left bg-black/20 w-[10%]">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if (!item.userName) return null;
            return (
              <tr
                key={index}
                className="cursor-pointer hover"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(
                    `/class/${item.name.toCapitalCase().replaceAll(" ", "-")}`
                  );
                }}
              >
                <td>
                  <Link
                    href={`/class/${item.name
                      .toCapitalCase()
                      .replaceAll(" ", "-")}`}
                    className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                    {item.name.toCapitalCase()}
                  </Link>
                </td>
                <td className="hidden md:table-cell">
                  <p className="italic line-clamp-2"> {item.description}</p>
                </td>
                <td
                  className="cursor-pointer hover:bg-black/20 hidden md:table-cell"
                  onClick={(e) => {
                    e.stopPropagation();
                    const formattedName = item.name
                      .toCapitalCase()
                      .replaceAll(" ", "-");
                    router.push(`/class/${formattedName}/subclass`);
                  }}
                >
                  <p className="line-clamp-2">
                    <Link
                      href={`/class/${item.name
                        .toCapitalCase()
                        .replaceAll(" ", "-")}/subclass`}
                      className="text-blue-500 hover:text-blue-700 font-bold"
                    >
                      {item.subClassName}
                    </Link>
                  </p>
                </td>
                <td>{item.userName}</td>
                <td className="hidden sm:table-cell">
                  {item.updatedAt.getDate()}/{item.updatedAt.getMonth()}/
                  {item.updatedAt.getFullYear()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <div className="loading loading-lg m-4" />}
    </main>
  );
};

export default SelectHomebrewClassPage;
