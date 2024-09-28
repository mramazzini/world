import SubClassDisplay from "@/app/components/ClassInfo/SubClassDisplay";

import { SubClassInfo } from "@/lib/utils/types/types";

import Loading from "../../../UI/Loading";

const SubClassPage = ({ subclass }: { subclass: SubClassInfo | null }) => {
  if (!subclass) return <span className="p-4">Subclass does not exist</span>;
  return (
    <div className="p-4 md:p-8">
      {!subclass && <Loading />}

      {subclass && <SubClassDisplay subClass={subclass} />}
    </div>
  );
};

export default SubClassPage;
