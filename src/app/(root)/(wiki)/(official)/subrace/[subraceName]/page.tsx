import { Metadata } from "next";

import "@/lib/string.extensions";

import SubRacePage from "@/app/components/pages/wiki/official/SubRace.page";
import { getSubRace } from "@/lib/actions/db/subrace/read.actions";
import { getWeapons } from "@/lib/actions/db/weapons/read.actions";

type Props = {
  params: { subraceName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubRace(params.subraceName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Subrace Not Found - Max's DND Wiki",
      description: "Subrace Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Subrace Not Found - Max's DND Wiki",
        description: "Subrace Not Found - Max's DND Wiki",
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
  const race = await getSubRace(params.subraceName.replaceAll("-", " "));

  return <SubRacePage subRace={race} />;
};

export default Page;
