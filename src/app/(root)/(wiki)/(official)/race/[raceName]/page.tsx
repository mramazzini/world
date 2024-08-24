import { Metadata } from "next";

import "@/lib/string.extensions";
import { getRace } from "@/lib/actions/db/race/get.actions";
import RacePage from "@/app/components/pages/Race.page";
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
  const race = await getRace(params.raceName.replaceAll("-", " "));
  const weapons = await getWeapons();

  const weaponNames = weapons
    .filter((weapon) => race?.weaponProficiencies.includes(weapon.id))
    .map((weapon) => weapon.name);

  return <RacePage race={race} weaponNames={weaponNames} />;
};

export default Page;
