"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getClass } from "@/lib/actions/db/read.actions";
import { Class, Prisma, Feature, SubClass } from "@prisma/client";
import { ClassInfo } from "@/lib/types";
import ClassDisplay from "@/app/components/CreateClass/ClassDisplay";

const ClassPage = () => {
  const router = usePathname();
  const className = router.split("/")[2];

  const [data, setData] = useState<ClassInfo | null>(null);

  useEffect(() => {
    getClass(className).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [className]);

  return (
    <div className="p-4">
      {!data && <span className="loading" />}
      {data && (
        <ClassDisplay
          classObj={data as Class}
          features={data.Features}
          subClasses={data.SubClasses}
        />
      )}
    </div>
  );
};

export default ClassPage;
