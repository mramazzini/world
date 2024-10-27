import ChangelogPage from '@/pages-lib/community/Changelog.page';

export const metadata = {
  title: "Change Log - Max's DND",
  description: "View previous and upcoming updates for Max's DND",
  openGraph: {
    type: 'website',
    title: "Change Log - Max's DND",
    description: "View previous and upcoming updates for Max's DND",
    images: [
      {
        url: 'https://www.maxdnd.com/images/hero.jpg',
        width: 1440,
        height: 1920,
        alt: 'Dungeons and Dragons Fire Dragon Attack',
      },
    ],
  },
};

const Page = () => {
  return <ChangelogPage />;
};

export default Page;
