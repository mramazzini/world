import WorkshopPage from '@/pages-lib/workshop/Workshop.page';

import { Metadata } from 'next';

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error('DOMAIN_NAME is not defined');
}
export const metadata: Metadata = {
  title: "Homebrew Workshop - Max's DND",
  description: '.',
  metadataBase: new URL(process.env.DOMAIN_NAME),
  openGraph: {
    type: 'website',
    title: "Max's DND",
    description:
      "Create and share your homebrew content in Max's DND Workshop.",
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

export default function Page() {
  return <WorkshopPage />;
}
