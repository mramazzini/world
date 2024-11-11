import { Metadata } from 'next';

import '@/lib/string.extensions';

import { getCreature } from '@/lib/actions/db/creature/read.actions';
import CreaturePage from '@/pages-lib/wiki/official/Creatures.page';

type Props = {
  params: { creatureName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getCreature({
    query: params.creatureName.replaceAll('-', ' '),
    type: 'name',
  });

  if (!data) {
    return {
      title: "Creature Not Found - Max's DND",
      description: "Creature Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Creature Not Found - Max's DND",
        description: "Creature Not Found - Max's DND",

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
  }

  return {
    title: `${data.name} - Max's DND`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + '...'
        : data.description,
    openGraph: {
      type: 'website',
      title: `${data.name} - Max's DND`,
      description:
        data.description.length > 157
          ? data.description.substring(0, 157) + '...'
          : data.description,
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
}

const Page = async ({ params }: Props) => {
  const creature = await getCreature({
    query: params.creatureName.replaceAll('-', ' '),
    type: 'name',
  });
  if (!creature)
    return (
      <main className="p-4">
        <h1>Creature Not Found</h1>
      </main>
    );
  return <CreaturePage creature={creature} />;
};

export default Page;
