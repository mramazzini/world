"use client";
import { useState, useEffect } from "react";
import { ClassInfo, Pages } from "@/lib/types";

import "@/lib/string.extensions";
import Link from "next/link";

import { useRouter } from "next/navigation";
import Loading from "../../UI/Loading";
import { getClassChunk } from "@/lib/actions/db/class/read.actions";

const SelectClassPage = () => {
  const router = useRouter();
  const [data, setData] = useState<ClassInfo[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getClassChunk(0, "").then((res) => {
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
        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            href={`/homebrew/class`}
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
          >
            View Homebrew Classes -&gt;
          </Link>
          <Link
            href={"/homebrew/class/create"}
            className={"btn btn-ghost border border-gray-500 w-full"}
          >
            Create a Class -&gt;
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
            <th className="text-left bg-black/20 w-[20%] hidden md:table-cell">
              Subclass
            </th>
            <th className="text-left bg-black/20 w-[10%] ">Source</th>
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
                className="cursor-pointer hover transition ease-in-out duration-50"
                onClick={() => {
                  router.push(`/class/${item.name}`);
                }}
              >
                <td>
                  <p className="btn btn-xs btn-primary h-auto font-bold">
                    {item.name.toCapitalCase()}
                  </p>
                </td>
                <td className="hidden md:table-cell">
                  <p className="italic line-clamp-2 "> {item.flavorText}</p>
                </td>
                <td
                  className="cursor-pointer hidden md:table-cell"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/class/${item.name}/subclass`);
                  }}
                >
                  <p className=" btn  btn-accent btn-xs h-auto  font-bold ">
                    {item.subClassName}
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
      {loading && <Loading />}
    </main>
  );
};

export default SelectClassPage;
