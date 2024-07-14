"use client";
import { usePathname } from "next/navigation";
import "@/lib/string.extensions";
import { getSubclassFromClassName } from "@/lib/actions/db/read.actions";
import { useState, useEffect } from "react";

import { SubClass } from "@prisma/client";
import Link from "next/link";
const Page = () => {
  const router = usePathname();
  const className = router.split("/")[2];
  const [data, setData] = useState<SubClass[] | null>(null);
  useEffect(() => {
    getSubclassFromClassName(className).then((res) => {
      setData(res);
    });
  }, [className]);
  return (
    <main className="p-4">
      <h1>{className.toCapitalCase()} Subclasses</h1>
      <p>This is the page for the {className} subclasses.</p>
      {!data && <span className="loading" />}
      {data && (
        <ul>
          {data.map((subclass) => (
            <li key={subclass.id}>
              <Link
                href={`/class/${className}/subclass/${subclass.name.replaceAll(
                  " ",
                  "-"
                )}`}
                className="m-2 text-blue-500"
              >
                {subclass.name.toCapitalCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Page;
