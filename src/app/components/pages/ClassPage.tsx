import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getClass } from "@/lib/actions/db/class/read.actions";
import { Class, Prisma, Feature, SubClass } from "@prisma/client";
import { ClassInfo } from "@/lib/types";
import ClassDisplay from "@/app/components/ClassInfo/ClassDisplay";
import Loading from "../UI/Loading";

const ClassPage = ({ classObj }: { classObj: ClassInfo | null }) => {
  if (!classObj) return <span className="p-4">Class does not exist</span>;
  return (
    <main className="p-4 md:p-8">
      {!classObj && <Loading />}
      {classObj && (
        <ClassDisplay
          classObj={classObj as Class}
          features={classObj.Features}
          subClasses={classObj.SubClasses}
          casterType={classObj.casterType || null}
          customFields={classObj.customFields}
        />
      )}
    </main>
  );
};

export default ClassPage;
