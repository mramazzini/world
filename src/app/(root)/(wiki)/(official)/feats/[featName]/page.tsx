import { Metadata } from "next";

import "@/lib/string.extensions";
import { getFeat } from "@/lib/actions/db/feat/read.actions";
import FeatPage from "@/app/components/pages/wiki/official/Feat.page";
import { getWeapons } from "@/lib/actions/db/weapons/read.actions";

type Props = {
  params: { featName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getFeat(params.featName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Feat Not Found - Max's DND Wiki",
      description: "Feat Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Feat Not Found - Max's DND Wiki",
        description: "Feat Not Found - Max's DND Wiki",
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
  const feat = await getFeat(params.featName.replaceAll("-", " "));

  return <FeatPage feat={feat} />;
};

export default Page;
