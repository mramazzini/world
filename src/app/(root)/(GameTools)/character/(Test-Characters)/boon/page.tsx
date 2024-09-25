import CharacterCreate from "@/app/components/pages/gameTools/Character.page";
import { Metadata } from "next";

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error("DOMAIN_NAME is not defined");
}
export const metadata: Metadata = {
  title: "Create a Character - Max's DND",
  description: ".",
  metadataBase: new URL(process.env.DOMAIN_NAME),
  openGraph: {
    type: "website",

    title: "Max's DND",
    description: "Create you Dungone's and Dragon'sfifth editon character.",
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

export default function Page() {
  return <CharacterCreate charName="Boon" />;
}
