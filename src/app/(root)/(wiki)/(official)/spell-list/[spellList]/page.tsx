import { Metadata } from 'next';

import '@/lib/string.extensions';

import { getSpellList } from '@/lib/actions/db/spellList/read.actions';
import SpellListPage from '@/pages-lib/wiki/official/SpellList.page';

type Props = {
  params: { spellList: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSpellList({
    query: params.spellList.replaceAll('-', ' '),
    type: 'name',
  });

  if (!data) {
    return {
      title: "SpellList Not Found - Max's DND",
      description: "SpellList Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "SpellList Not Found - Max's DND",
        description: "SpellList Not Found - Max's DND",

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
  const spellList = await getSpellList({
    query: params.spellList.replaceAll('-', ' '),
    type: 'name',
  });
  return <SpellListPage spellList={spellList} />;
};

export default Page;
