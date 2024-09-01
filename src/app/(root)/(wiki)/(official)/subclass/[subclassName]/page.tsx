import { Metadata } from "next";

import "@/lib/string.extensions";
import SubClassPage from "@/app/components/pages/wiki/official/Subclass.page";
import { getSubclass } from "@/lib/actions/db/subclass/read.actions";

type Props = {
  params: { subclassName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubclass(params.subclassName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Subclass Not Found - Max's DND Wiki",
      description: "Subclass Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Subclass Not Found - Max's DND Wiki",
        description: "Subclass Not Found - Max's DND Wiki",
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
  const subclass = await getSubclass(params.subclassName.replaceAll("-", " "));
  return <SubClassPage subclass={subclass} />;
};

export default Page;
