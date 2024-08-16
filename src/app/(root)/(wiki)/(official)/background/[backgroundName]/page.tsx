import { Metadata } from "next";

import "@/lib/string.extensions";

import { getBackground } from "@/lib/actions/db/background/read.actions";
import BackgroundPage from "@/app/components/pages/Background.page";

type Props = {
  params: { backgroundName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBackground(params.backgroundName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Spell Not Found",
      description: "Spell Not Found",
    };
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description: data.description,
  };
}

const Page = async ({ params }: Props) => {
  const background = await getBackground(
    params.backgroundName.replaceAll("-", " ")
  );
  return <BackgroundPage background={background} />;
};

export default Page;
