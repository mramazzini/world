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
      openGraph: {
        type: "website",
        title: "Item Not Found - Max's DND Wiki",
        description: "Item Not Found - Max's DND Wiki",
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
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + "..."
        : data.description,
    openGraph: {
      type: "website",
      title: `${data.name} - Max's DND Wiki`,
      description:
        data.description.length > 157
          ? data.description.substring(0, 157) + "..."
          : data.description,
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
}

const Page = async ({ params }: Props) => {
  const item = await getItem(params.itemName.replaceAll("-", " "));
  return <ItemPage item={item} />;
};

export default Page;
