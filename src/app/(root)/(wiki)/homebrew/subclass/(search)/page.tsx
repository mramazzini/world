import HomebrewSubclassSearchPage from "@/app/components/SearchPages/Homebrew/H-SubclassSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Subclass Homebrew - Max's DND Wiki",
  description: "User submitted homebrew subclasses for your DND campaign.",
};

const Page = async () => {
  const subclasses = await getSubclasses({ homebrew: true });
  return (
    <Suspense fallback={<Loading />}>
      <HomebrewSubclassSearchPage subclasses={subclasses} />
    </Suspense>
  );
};
export default Page;
