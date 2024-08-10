import SelectSubclass from "@/app/components/pages/SelectSubclassPage";
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
    title: `${data.name.toCapitalCase()} Subclasses - Max's DND Wiki`,
    description: `A list of subclasses for the ${data.name.toCapitalCase()} class in Dungeons and Dragons 5th Edition.`,
  };
}
const Page = () => {
  return <SelectSubclass />;
};

export default Page;
