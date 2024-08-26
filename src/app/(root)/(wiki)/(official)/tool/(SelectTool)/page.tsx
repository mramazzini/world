import ToolSearchPage from "@/app/components/SearchPages/Official/ToolSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getTools } from "@/lib/actions/db/tool/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools - Max's DnD Wiki",
  description:
    "A list of Tools for your Dungeons and Dragons Fifth Edition character to utilize.",
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const tools = await getTools();
  return <ToolSearchPage tools={tools} />;
};

export default Page;
