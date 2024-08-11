"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getClass } from "@/lib/actions/db/class/read.actions";
import { Class, Prisma, Feature, SubClass } from "@prisma/client";
import { ClassInfo } from "@/lib/types";
import ClassDisplay from "@/app/components/ClassInfo/ClassDisplay";
import Loading from "../UI/Loading";

const ClassPage = () => {
  const router = usePathname();
  const className = router?.split("/")[2];
  const [data, setData] = useState<ClassInfo | null>(null);

  useEffect(() => {
    getClass(className).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [className]);
  if (!className) return <span className="p-4">Class does not exist</span>;
  return (
    <main className="p-4 md:p-8">
      {!data && <Loading />}
      {data && (
        <ClassDisplay
          classObj={data as Class}
          features={data.Features}
          subClasses={data.SubClasses}
          casterType={data.casterType || null}
          customFields={data.customFields}
        />
      )}
    </main>
  );
};

export default ClassPage;
