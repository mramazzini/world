"use client";
import { useState, useEffect } from "react";
import { DBInfo, Pages } from "@/lib/types";
import { getClasses } from "@/lib/actions/db/read.actions";
import { Class } from "@prisma/client";
import "@/lib/string.extensions";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState<DBInfo[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getClasses().then((res) => {
      setLoading(false);
      setData(res);
    });
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-4/5">
          <h1>Classes</h1>
          <p className="italic">
            Classes are your characters profession. They are the backbone of
            your character and determine what abilities you have access to. As
            you level up, you will gain new abilities and features through your
            class.
          </p>
        </div>
        <div className="flex items-center">
          <Link className={"btn btn-primary"} href={"#homebrew"}>
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
            <th className="text-left bg-black/20">Name</th>
            <th className="text-left bg-black/20">Description</th>
            <th className="text-left bg-black/20">Source</th>
            <th className="text-left bg-black/20">Last Updated</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link
                    href={`/class/${item.name}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {item.name.toCapitalCase()} -&gt;
                  </Link>
                </td>
                <td className="italic w-2/3">{item.description}</td>
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
        Classes created by the community. These are unnofficial and may be
        unbalanced. Ask your DM before using them in your campaign.
      </p>
      <div className="divider" />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            <th className="text-left bg-black/20">Name</th>
            <th className="text-left bg-black/20">Description</th>
            <th className="text-left bg-black/20">Source</th>
            <th className="text-left bg-black/20">Last Updated</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Page;
