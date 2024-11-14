import { Metadata } from 'next';

import '@/lib/string.extensions';

import SubSpeciesPage from '@/pages-lib/wiki/official/SubRace.page';
import { getSubSpecie } from '@/lib/actions/db/subSpecies/read.actions';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSubSpecie({
    query: params.slug,
    type: 'slug',
  });

  if (!data) {
    return {
      title: "Subspecies Not Found - Max's DND",
      description: "Subspecies Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Subspecies Not Found - Max's DND",
        description: "Subspecies Not Found - Max's DND",
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
  const subspecies = await getSubSpecie({
    query: params.slug,
    type: 'slug',
  });
  if (!subspecies) notFound();
  return <SubSpeciesPage subSpecies={subspecies} />;
};

export default Page;
