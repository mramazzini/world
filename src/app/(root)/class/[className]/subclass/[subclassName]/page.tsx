import { getSubclass } from "@/lib/actions/db/read.actions";
import SubClassPage from "@/app/components/pages/SubclassPage";
import { Metadata } from "next";
import "@/lib/string.extensions";
type Props = {
  params: { subclassName: string; className: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubclass(params.subclassName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Subclass Not Found - Max's DND Wiki",
      description: "Subclass Not Found - Max's DND Wiki",
    };
  }
  return {
    title: `${data.name} - Max's DND Wiki`,
    description: `${params.className.toCapitalCase()} - ${params.subclassName.replaceAll(
      "-",
      " "
    )}
    
    ${data.description}`,
  };
}

const Page = () => {
  return <SubClassPage />;
};

export default Page;
