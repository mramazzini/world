import { Metadata } from "next";

import "@/lib/string.extensions";

import { getTool } from "@/lib/actions/db/tool/read.actions";
import ToolPage from "@/app/components/pages/wiki/official/Tool.page";

type Props = {
  params: { toolName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getTool(params.toolName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Tool Not Found - Max's DND Wiki",
      description: "Tool Not Found - Max's DND Wiki",
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
  const tool = await getTool(params.toolName.replaceAll("-", " "));
  return <ToolPage tool={tool} />;
};

export default Page;
