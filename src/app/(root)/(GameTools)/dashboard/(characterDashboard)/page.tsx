import Dashboard from "@/app/components/pages/gameTools/Dashboard/Dashboard";
import {
  getCharacters,
  getCharactersByUser,
} from "@/lib/actions/db/character/read.actions";
import { getUserId } from "@/lib/utils/auth";
import { Metadata } from "next";

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error("DOMAIN_NAME is not defined");
}
export const metadata: Metadata = {
  title: "Character Dashboard - Max's DND",
  description: ".",
  metadataBase: new URL(process.env.DOMAIN_NAME),
  openGraph: {
    type: "website",

    title: "Max's DND",
    description: "Create",
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
  return <Dashboard />;
}
