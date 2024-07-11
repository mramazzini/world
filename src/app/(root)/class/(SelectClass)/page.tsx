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
    <div className="p-4">
      <h1>Classes</h1>
      <Link className="btn btn-primary" href={"/class/create"}>
        Create Class
      </Link>
      {loading && <div className="loading" />}
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/class/${item.name}`}>{item.name.toCapitalCase()}</Link>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Page;
