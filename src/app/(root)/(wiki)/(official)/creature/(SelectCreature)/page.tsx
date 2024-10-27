import CreatureSearchPage from '@/pages-lib/SearchPages/Official/CreatureSearch.page';
import { getCreatures } from '@/lib/actions/db/creature/read.actions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creatures - Max's DND",
  description:
    'Creatures are statblocks that represent Non-player characters. Use these to have an easy reference for creatures for your characters to interact/fight with.',
  openGraph: {
    type: 'website',
    title: "Creatures - Max's DND",
    description:
      'Creatures are statblocks that represent Non-player characters. Use these to have an easy reference for creatures for your characters to interact/fight with.',
    images: [
      {
        url: 'https://www.maxdnd.com/images/hero.jpg',
        width: 1440,
        height: 1920,
        alt: 'Dungeons and Dragons Fire Dragon Attack',
      },
    ],
  },
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/creature`,
  },
};
export const dynamic = 'force-dynamic';
const Page = async () => {
  const creatures = await getCreatures();
  return <CreatureSearchPage creatures={creatures} />;
};

export default Page;
