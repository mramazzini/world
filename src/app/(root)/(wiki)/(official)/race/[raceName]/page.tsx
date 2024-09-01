import { Metadata } from "next";

import "@/lib/string.extensions";
import { getRace } from "@/lib/actions/db/race/get.actions";
import RacePage from "@/app/components/pages/wiki/official/Race.page";
import { getWeapons } from "@/lib/actions/db/weapons/weapons.actions";

type Props = {
  params: { raceName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getRace(params.raceName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Race Not Found - Max's DND Wiki",
      description: "Race Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Race Not Found - Max's DND Wiki",
        description: "Race Not Found - Max's DND Wiki",
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
  const race = await getRace(params.raceName.replaceAll("-", " "));
  const weapons = await getWeapons();

  const weaponNames = weapons
    .filter((weapon) => race?.weaponProficiencies.includes(weapon.id))
    .map((weapon) => weapon.name);

  return <RacePage race={race} weaponNames={weaponNames} />;
};

export default Page;
