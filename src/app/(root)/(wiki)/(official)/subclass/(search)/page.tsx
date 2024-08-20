import SubclassSearchPage from "@/app/components/SearchPages/Official/SubclassSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Subclasses - Max's DND Wiki",
  description:
    "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
};

const Page = async () => {
  const subclasses = await getSubclasses({ homebrew: false });
  if (!subclasses) {
    return (
      <div className="p-8">
        Subclasses not found, try refreshing the page or come back later.
      </div>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      <SubclassSearchPage subclasses={subclasses} />
    </Suspense>
  );
};

export default Page;
