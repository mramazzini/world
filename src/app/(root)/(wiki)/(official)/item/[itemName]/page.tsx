import { Metadata } from "next";

import "@/lib/string.extensions";
import { getItem } from "@/lib/actions/db/item/read.actions";
import ItemPage from "@/app/components/pages/wiki/official/Item.page";

type Props = {
  params: { itemName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getItem(params.itemName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Item Not Found - Max's DND Wiki",
      description: "Item Not Found - Max's DND Wiki",
    };
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + "..."
        : data.description,
  };
}

const Page = async ({ params }: Props) => {
  const item = await getItem(params.itemName.replaceAll("-", " "));
  return <ItemPage item={item} />;
};

export default Page;
