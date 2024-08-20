import ClassSearchPage from "@/app/components/SearchPages/Official/ClassSearch.page";
import { getClasses } from "@/lib/actions/db/class/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Classes - Max's DND Wiki",
  description:
    "A vast collection of classes for your DND campaign. Choose from offical content or user submitted homebrew classes.",
};

const Page = async () => {
  const classes = await getClasses(false);
  if (!classes) {
    return (
      <div className="p-8">
        Classes not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <ClassSearchPage classes={classes} />;
};

export default Page;
