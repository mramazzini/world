"use client";
import SubClassDisplay from "@/app/components/CreateClass/SubClassDisplay";
import { getSubclass } from "@/lib/actions/db/read.actions";
import { SubClassInfo } from "@/lib/types";
import { SubClass } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const Page = () => {
  const router = usePathname();
  const className = router.split("/")[2];
  const subClassName = router.split("/")[4].replaceAll("-", " ");

  const [data, setData] = useState<SubClassInfo | null>(null);
  useEffect(() => {
    getSubclass(subClassName).then((res) => {
      setData(res);
    });
  }, [subClassName]);
  return (
    <div className="p-4">
      {!data && <span className="loading" />}
      <div className="p-4">
        <Link
          className="btn mr-2 btn-ghost border border-gray-400"
          href={`/class/${className}/subclass`}
        >
          View All {className.toCapitalCase()} Subclasses
        </Link>
        {/* go back */}
        <Link
          className="btn btn-ghost border border-gray-400"
          href={`/class/${className.replaceAll(" ", "-").toLowerCase()}`}
        >
          View {className.toCapitalCase()} Class
        </Link>
      </div>
      {data && <SubClassDisplay subClass={data} />}
    </div>
  );
};

export default Page;
