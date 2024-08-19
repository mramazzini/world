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
      title: "Subclass Not Found - Max's DND Wiki",
      description: "Subclass Not Found - Max's DND Wiki",
    };
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + "..."
        : data.description,
  };
}
const Page = async ({ params }: Props) => {
  const subclass = await getSubclass(params.subclass.replaceAll("-", " "));
  return <SubClassPage subclass={subclass} />;
};

export default Page;
