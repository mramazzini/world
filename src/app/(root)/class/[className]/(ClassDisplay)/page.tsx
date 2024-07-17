import ClassPage from "@/app/components/pages/ClassPage";
import { Metadata } from "next";
import { getClass } from "@/lib/actions/db/read.actions";

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
const Page = () => {
  return <ClassPage />;
};

export default Page;
