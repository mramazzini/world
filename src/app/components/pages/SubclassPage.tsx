"use client";
import SubClassDisplay from "@/app/components/CreateClass/SubClassDisplay";
import { getSubclass } from "@/lib/actions/db/read.actions";
import { SubClassInfo } from "@/lib/types";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const SubClassPage = () => {
  const router = usePathname();

  const subClassName = router?.split("/")[4].replaceAll("-", " ");

  const [data, setData] = useState<SubClassInfo | null>(null);
  useEffect(() => {
    getSubclass(subClassName).then((res) => {
      setData(res);
    });
  }, [subClassName]);

  if (!subClassName)
    return <span className="p-4">Subclass does not exist</span>;
  return (
    <div className="pt-4">
      {!data && <span className="loading" />}

      {data && <SubClassDisplay subClass={data} />}
    </div>
  );
};

export default SubClassPage;
