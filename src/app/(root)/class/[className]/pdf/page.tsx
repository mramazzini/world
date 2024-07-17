import ClassPdfPage from "@/pages/ClassPdfPage";
import { Metadata } from "next";

type Props = {
  params: { className: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.className} PDF - Max's DND Wiki`,
    description: `Download A PDF for the ${params.className} class from Max's DND Wiki`,
  };
}
// Create Document Component
const Page = () => {
  return <ClassPdfPage />;
};

export default Page;
