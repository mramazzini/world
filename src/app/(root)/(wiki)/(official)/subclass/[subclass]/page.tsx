import { Metadata } from "next";

import "@/lib/string.extensions";
import SubClassPage from "@/app/components/pages/SubclassPage";
import { getSubclass } from "@/lib/actions/db/subclass/read.actions";

type Props = {
  params: { subclass: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubclass(params.subclass.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Subclass Not Found",
      description: "Subclass Not Found",
    };
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description: data.description,
  };
}
const Page = () => {
  return <SubClassPage />;
};

export default Page;
