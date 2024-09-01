import { Metadata } from "next";

import "@/lib/string.extensions";
import { getClass } from "@/lib/actions/db/class/read.actions";
import { getSubclassesByClass } from "@/lib/actions/db/subclass/read.actions";
import SubclassClassSearchPage from "@/app/components/SearchPages/Official/SubclassClassSearch.page";

type Props = {
  params: { className: string };
};

export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getClass(params.className);
  if (!data) {
    return {
      title: "Class Not Found - Max's DND Wiki",
      description: "Class Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",

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
    title: `${data.name.toCapitalCase()} Subclasses - Max's DND Wiki`,
    description: `A list of subclasses for the ${data.name.toCapitalCase()} class in Dungeons and Dragons 5th Edition.`,
    openGraph: {
      type: "website",
      title: `${data.name.toCapitalCase()} Subclasses - Max's DND Wiki`,
      description: `A list of subclasses for the ${data.name.toCapitalCase()} class in Dungeons and Dragons 5th Edition.`,
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
  const subclasses = await getSubclassesByClass(params.className);
  return (
    <SubclassClassSearchPage
      subclasses={subclasses}
      className={params.className}
    />
  );
};

export default Page;
