import CreateClassPage from "@/app/components/pages/create/CreateClass.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Class - Max's DND Wiki",
  description: "Create a new class for your campaign.",
};

const Page = () => {
  return <CreateClassPage />;
};

export default Page;
