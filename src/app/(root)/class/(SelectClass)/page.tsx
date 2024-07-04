"use client";
import { useState, useEffect } from "react";
import { DBInfo, Pages } from "@/lib/types";
import { getClasses } from "@/lib/actions/db/read.actions";
import { Class } from "@prisma/client";
import Link from "next/link";
const page = () => {
  const [data, setData] = useState<DBInfo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getClasses().then((res) => {
      setLoading(false);
      setData(res);
    });
  }, []);

  return (
    <div>
      <h1>Class</h1>
      {loading && <p>Loading...</p>}
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/class/${item.name}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default page;
