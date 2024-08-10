"use client";
import { usePathname, useRouter } from "next/navigation";
import "@/lib/string.extensions";
import { useState, useEffect } from "react";
import Link from "next/link";

import Loading from "../UI/Loading";
import { QueryParams, SubClassInfo } from "@/lib/types";
import SearchBar from "../UI/SearchBar";
import { getSubclassChunkByClass } from "@/lib/actions/db/subclass/read.actions";

const SelectHomebrewSubclassPage = () => {
  const router = useRouter();
  const path = usePathname();
  const className = path?.split("/")[2];

  const [data, setData] = useState<SubClassInfo[] | null>(null);

  if (!className) return <span className="p-4">Class does not exist</span>;
  return (
    <main className="p-8">
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>{className.toCapitalCase()} Subclass Homebrew</h1>
          <p className="italic">
            Homebrew subclasses are created by the community. They are not
            official content and should be reviewed by your Dungeon Master
            before being used in a campaign.
          </p>
        </div>
        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
            href={`/class/${className}/subclass`}
          >
            View Official Subclasses -&gt;
          </Link>
          <Link
            className={"btn btn-ghost border border-gray-500 w-full"}
            href={`/class/${className}`}
          >
            View {className.toCapitalCase()} Class -&gt;
          </Link>
        </div>
      </div>
      <div className="divider" />
      <SearchBar
        placeholder="Search Subclass..."
        handleSearch={async (query: QueryParams) => {
          setData(null);
          const res = await getSubclassChunkByClass(query, className);
          //filter out subclasses without a user
          const filtered =
            res && res.filter((item) => (item.userId ? true : false));
          setData(filtered);
          return filtered ? filtered.length : 0;
        }}
      />

      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[5%] ">Name</th>
            <th className="text-left bg-black/20 w-[60%]">Description</th>
            <th className="text-left bg-black/20 w-[20%]">User</th>
            <th className="text-left bg-black/20 w-[10%]">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              if (!item.User?.username) return null;
              return (
                <tr
                  key={index}
                  className="cursor-pointer hover"
                  onClick={(e) => {
                    e.stopPropagation();
                    const formattedName = `/class/${className}/subclass/${item.name.replaceAll(
                      " ",
                      "-"
                    )}`;
                    router.push(formattedName);
                  }}
                >
                  <td>
                    <p className="text-accent  font-bold">
                      {item.name.toCapitalCase()}
                    </p>
                  </td>
                  <td className="hidden md:table-cell">
                    <p className="italic line-clamp-2"> {item.flavorText}</p>
                  </td>
                  <td>
                    <p className="line-clamp-2"> {item.User.username}</p>
                  </td>
                  <td className="hidden sm:table-cell">
                    {item.updatedAt.getDate()}/{item.updatedAt.getMonth()}/
                    {item.updatedAt.getFullYear()}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!data && <Loading />}
    </main>
  );
};

export default SelectHomebrewSubclassPage;
