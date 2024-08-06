import SelectSubclass from "@/app/components/pages/SelectSubclassPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Subclasses - Max's DND Wiki",
  description:
    "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
};
const Page = () => {
  return <SelectSubclass />;
};

export default Page;
