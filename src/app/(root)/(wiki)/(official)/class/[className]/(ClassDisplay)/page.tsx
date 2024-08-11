import ClassPage from "@/app/components/pages/ClassPage";
import { Metadata } from "next";

import "@/lib/string.extensions";
import { getClass } from "@/lib/actions/db/class/read.actions";

type Props = {
  params: { className: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getClass(params.className);
  if (!data) {
    return {
      title: "Class Not Found",
      description: "Class Not Found",
    };
  }
  return {
    title: `${data.name.toCapitalCase()} - Max's DND Wiki`,
    description: data.description,
  };
}
const Page = async ({ params }: Props) => {
  const classObj = await getClass(params.className);
  return <ClassPage classObj={classObj} />;
};

export default Page;
