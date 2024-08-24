import HomebrewSubclassSearchPage from "@/app/components/SearchPages/Homebrew/H-SubclassSearch.page";

import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclass Homebrew - Max's DND Wiki",
  description: "User submitted homebrew subclasses for your DND campaign.",
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const subclasses = await getSubclasses({ homebrew: true });
  return <HomebrewSubclassSearchPage subclasses={subclasses} />;
};
export default Page;
