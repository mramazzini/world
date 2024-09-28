import { ClassInfo } from "@/lib/utils/types/types";
import Loading from "../../UI/Loading";
import ClassSearch from "../../ClassInfo/ClassSearch";

const ClassSearchPage = ({ classes }: { classes: ClassInfo[] | null }) => {
  if (!classes) return <span className="p-4">Class does not exist</span>;
  return (
    <main className="p-4 md:p-8">
      {!classes && <Loading />}
      {classes && <ClassSearch classes={classes} />}
    </main>
  );
};

export default ClassSearchPage;
