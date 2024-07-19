"use client";
import { useState, useEffect } from "react";
import { DBmetaData, Pages } from "@/lib/types";
import { getClassMeta } from "@/lib/actions/db/read.actions";
import { Class } from "@prisma/client";
import "@/lib/string.extensions";
import Link from "next/link";
import useSessionState from "../Utility/useSessionState";
import { useRouter } from "next/navigation";

const SelectClassPage = () => {
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
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>Official Classes</h1>
          <p className="italic ">
            Classes are your characters profession. They are the backbone of
            your character and determine what abilities you have access to. As
            you level up, you will gain new abilities and features through your
            class.
          </p>
        </div>
        <div className="flex items-center my-2">
          <Link
            href={`/class/homebrew`}
            className={"btn btn-ghost border border-gray-500"}
          >
            View Homebrew Classes -&gt;
          </Link>
        </div>
      </div>
      <div className="divider" />
      {/* <Link className="btn btn-primary" href={"/class/create"}>
        Create Class
      </Link> */}

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
            if (item.userId) return null;
            return (
              <tr
                key={index}
                className="cursor-pointer hover"
                onClick={() => {
                  router.push(`/class/${item.name}`);
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
                  <p className="italic line-clamp-2 "> {item.flavorText}</p>
                </td>
                <td
                  className="cursor-pointer hover:bg-black/20 hidden md:table-cell"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/class/${item.name}/subclass`);
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
      {loading && <div className="loading loading-lg m-4" />}
    </main>
  );
};

export default SelectClassPage;
