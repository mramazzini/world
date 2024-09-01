import ClassPage from "@/app/components/pages/wiki/official/Class.page";
import { Metadata } from "next";

import "@/lib/string.extensions";
import { getClass } from "@/lib/actions/db/class/read.actions";

type Props = {
  params: { className: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getClass(params.className);
  if (!data) {
    return {
      title: "Class Not Found - Max's DND Wiki",
      description: "Class Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Class Not Found - Max's DND Wiki",
        description: "Class Not Found - Max's DND Wiki",
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
    title: `${data.name.toCapitalCase()} - Max's DND Wiki`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + "..."
        : data.description,
    openGraph: {
      type: "website",
      title: `${data.name.toCapitalCase()} - Max's DND Wiki`,
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
  const classObj = await getClass(params.className);
  return <ClassPage classObj={classObj} />;
};

export default Page;
