import ItemSearchPage from "@/app/components/SearchPages/Official/ItemSearch.page";
import { getItems } from "@/lib/actions/db/item/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items - Max's DnD Wiki",
  description:
    "A list of Items for your Dungeons and Dragons Fifth Edition character to utilize.",
  openGraph: {
    type: "website",
    title: "Items - Max's DnD Wiki",
    description:
      "A list of Items for your Dungeons and Dragons Fifth Edition character to utilize.",
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
  const items = await getItems();
  return <ItemSearchPage items={items} />;
};

export default Page;
