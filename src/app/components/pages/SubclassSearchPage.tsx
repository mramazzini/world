"use client";
import Link from "next/link";
import { getSubclassChunk } from "@/lib/actions/db/read.actions";
import { useState } from "react";
import { SubClass } from "@prisma/client";
import { useRouter } from "next/navigation";
import SearchBar from "../UI/SearchBar";
import { SubclassSearchResults } from "@/lib/types";
import Loading from "../UI/Loading";

const SubclassSearchPage = () => {
  const [data, setData] = useState<SubclassSearchResults[] | null>(null);
  const router = useRouter();

  const handleSearch = async (index: number, query: string) => {
    setData(null);
    const res = await getSubclassChunk(index, query);
    setData(res);
    console.log(res);
    return res ? res.length : 0;
  };

  return (
    <main className="p-8">
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>Subclasses</h1>
          <p className="italic">
            Select a subclass to view more information. Subclasses are
            additional class options that provide more customization to your
            character. They provide additional abilities and features that
            differentiate your character from others of the same class.
          </p>
        </div>
        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            href={"/class/create"}
            className={"btn btn-ghost border border-gray-500 w-full"}
          >
            Create a Subclass -&gt;
          </Link>
        </div>
      </div>
      <div className="divider" />
      {/* search bar */}
      <SearchBar placeholder="Search Subclass..." handleSearch={handleSearch} />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[15%] ">Name</th>
            <th className="text-left bg-black/20 w-[50%] hidden md:table-cell">
              Description
            </th>
            <th className="text-left bg-black/20 w-[10%]">Source</th>
            <th className="text-left bg-black/20 w-[5%] hidden sm:table-cell">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((subClass) => (
              <tr
                onClick={() =>
                  router.push(
                    `/class/${
                      subClass.Class?.name
                    }/subclass/${subClass.name.replace(" ", "-")}`
                  )
                }
                key={subClass.id}
                className="hover cursor-pointer"
              >
                <td>
                  <Link
                    href={`/class/${subClass.classId}/subclass/${subClass.name}`}
                  >
                    {subClass.name}
                  </Link>
                </td>
                <td className="hidden md:table-cell">{subClass.flavorText}</td>
                <td>{subClass.userId ? subClass.userId : subClass.source}</td>
                <td className="hidden sm:table-cell">
                  {subClass.updatedAt.getDate()}/{" "}
                  {subClass.updatedAt.getMonth()}/
                  {subClass.updatedAt.getFullYear()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>{" "}
      {!data && <Loading />}
    </main>
  );
};

export default SubclassSearchPage;
