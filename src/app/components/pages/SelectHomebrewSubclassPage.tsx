"use client";
import { usePathname, useRouter } from "next/navigation";
import "@/lib/string.extensions";
import { useState, useEffect } from "react";
import Link from "next/link";
import { DBmetaData, src } from "@/lib/types";
import { getSubClassMeta } from "@/lib/actions/db/read.actions";

const SelectHomebrewSubclassPage = () => {
  const router = useRouter();
  const path = usePathname();
  const className = path?.split("/")[2];

  const [data, setData] = useState<DBmetaData[] | null>(null);
  useEffect(() => {
    getSubClassMeta(className).then((res) => {
      setData(res);
    });
  }, [className]);
  if (!className) return <span className="p-4">Class does not exist</span>;
  return (
    <main className="p-8">
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>Homebrew</h1>
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
              if (!item.userName) return null;
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
                    <p className="text-blue-500  font-bold">
                      {item.name.toCapitalCase()}
                    </p>
                  </td>
                  <td className="hidden md:table-cell">
                    <p className="italic line-clamp-2"> {item.flavorText}</p>
                  </td>
                  <td>
                    <p className="line-clamp-2"> {item.userName}</p>
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
      {!data && <span className="loading p-4" />}
    </main>
  );
};

export default SelectHomebrewSubclassPage;
