import { Metadata } from 'next';

import '@/lib/string.extensions';

import { getSpell } from '@/lib/actions/db/spell/read.actions';
import SpellPage from '@/pages-lib/wiki/official/Spell.page';
import NotFound from '@/components/NotFound/NotFound';

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSpell({
    query: params.slug,
    type: 'slug',
  });

  if (!data) {
    return {
      title: "Spell Not Found - Max's DND",
      description: "Spell Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Spell Not Found - Max's DND",
        description: "Spell Not Found - Max's DND",
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
  const spell = await getSpell({
    query: params.slug,
    type: 'slug',
  });
  if (!spell)
    return (
      <NotFound
        message="Spell Not Found"
        redirect="/spells"
        redirectText="Back to Spells"
      />
    );
  return <SpellPage spell={spell} />;
};

export default Page;
