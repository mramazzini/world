import ChangelogPage from "@/app/components/pages/community/Changelog.page";

export const metadata = {
  title: "Change Log - Max's DnD Wiki",
  description: "View previous and upcoming updates for Max's DnD Wiki",
  openGraph: {
    type: "website",
    title: "Change Log - Max's DnD Wiki",
    description: "View previous and upcoming updates for Max's DnD Wiki",
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

const Page = () => {
  return <ChangelogPage />;
};

export default Page;
