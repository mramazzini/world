import ItemSearchPage from "@/app/components/SearchPages/Official/ItemSearch.page";
import { getItems } from "@/lib/actions/db/item/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items - Max's DnD Wiki",
  description:
    "A list of Items for your Dungeons and Dragons Fifth Edition character to utilize.",
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const items = await getItems();
  return <ItemSearchPage items={items} />;
};

export default Page;
