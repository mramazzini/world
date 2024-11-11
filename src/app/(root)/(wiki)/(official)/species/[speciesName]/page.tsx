import { Metadata } from 'next';

import '@/lib/string.extensions';
import { getSpecie } from '@/lib/actions/db/species/get.actions';
import SpeciesPage from '@/pages-lib/wiki/official/Race.page';

type Props = {
  params: { speciesName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSpecie({
    query: params.speciesName.replaceAll('-', ' '),
    type: 'name',
  });

  if (!data) {
    return {
      title: "Species Not Found - Max's DND",
      description: "Species Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Species Not Found - Max's DND",
        description: "Species Not Found - Max's DND",
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
  const species = await getSpecie({
    query: params.speciesName.replaceAll('-', ' '),
    type: 'name',
  });

  return <SpeciesPage species={species} />;
};

export default Page;
