import { Metadata } from "next";

import "@/lib/string.extensions";

import { getWeapons } from "@/lib/actions/db/weapons/weapons.actions";
import { getSubRace } from "@/lib/actions/db/subrace/get.actions";
import SubRacePage from "@/app/components/pages/wiki/official/SubRace.page";

type Props = {
  params: { subraceName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubRace(params.subraceName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Subrace Not Found - Max's DND Wiki",
      description: "Subrace Not Found - Max's DND Wiki",
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
  const race = await getSubRace(params.subraceName.replaceAll("-", " "));
  const weapons = await getWeapons();

  const weaponNames = weapons
    .filter((weapon) => race?.weaponProficiencies.includes(weapon.id))
    .map((weapon) => weapon.name);
  console.log(race);
  return <SubRacePage subRace={race} weaponNames={weaponNames} />;
};

export default Page;
