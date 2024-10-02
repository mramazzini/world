import { Metadata } from "next";

import "@/lib/string.extensions";

import SubSpeciesPage from "@/app/components/pages/wiki/official/SubRace.page";
import { getSubSpecie } from "@/lib/actions/db/subSpecies/read.actions";
import { getWeapons } from "@/lib/actions/db/weapons/read.actions";

type Props = {
  params: { subspeciesName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubSpecie(params.subspeciesName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Subspecies Not Found - Max's DND Wiki",
      description: "Subspecies Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Subspecies Not Found - Max's DND Wiki",
        description: "Subspecies Not Found - Max's DND Wiki",
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
  const species = await getSubSpecie(
    params.subspeciesName.replaceAll("-", " ")
  );

  return <SubSpeciesPage subSpecies={species} />;
};

export default Page;
