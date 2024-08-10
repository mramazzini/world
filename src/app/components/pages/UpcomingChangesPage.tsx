import { DISCORD_INVITE } from "@/lib/globalVars";
import Link from "next/link";

const UpcomingChangesPage = () => {
  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>Upcoming Features</h1>
          <p className="text-lg">
            Hi! I&apos;m Max, the creator of this site. I&apos;m always working
            on new features and improvements for the site. Join the Official
            Discord to stay up to date with what&apos;s coming next!
          </p>
        </div>

        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
            href={`/changelog`}
          >
            View Previous Updates -&gt;
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <Link
        className={"btn btn-primary border border-gray-500 mb-2"}
        href={DISCORD_INVITE}
        target="_blank"
      >
        Join the Official Discord -&gt;
      </Link>
    </main>
  );
};

export default UpcomingChangesPage;
