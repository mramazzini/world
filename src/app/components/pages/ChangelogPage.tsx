import { DISCORD_INVITE } from "@/lib/globalVars";
import Link from "next/link";
import { version } from "os";

interface ChangelogItem {
  version: string;
  date: string;
  changes: string[];
}

const ChangelogPage = () => {
  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>Changelog</h1>
          <p className="text-lg">
            You can view all the changes made to the site at our Discord.
          </p>
        </div>
      </div>
      <div className="divider" />
      <div className="my-2 flex-col ">
        <Link
          className={"btn btn-primary border border-gray-500 mb-2"}
          href={DISCORD_INVITE}
          target="_blank"
        >
          Take me there -&gt;
        </Link>
      </div>
    </main>
  );
};

export default ChangelogPage;
