import SubclassSearchPage from "@/app/components/SearchPages/Official/SubclassSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclasses - Max's DND Wiki",
  description:
    "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
  openGraph: {
    type: "website",
    title: "Subclasses - Max's DND Wiki",
    description:
      "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
    images: [
      {
        url: "https://www.maxdnd.com/images/hero.jpg",
        width: 1440,
        height: 1920,
        alt: "Dungeons and Dragons Fire Dragon Attack",
      },
    ],
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const subclasses = await getSubclasses({ homebrew: false });
  if (!subclasses) {
    return (
      <div className="p-8">
        Subclasses not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <SubclassSearchPage subclasses={subclasses} />;
};

export default Page;
