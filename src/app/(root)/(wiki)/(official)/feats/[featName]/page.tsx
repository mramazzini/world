import { Metadata } from 'next';

import '@/lib/string.extensions';
import { getFeat } from '@/lib/actions/db/feat/read.actions';
import FeatPage from '@/pages-lib/wiki/official/Feat.page';

type Props = {
  params: { featName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getFeat({
    query: params.featName.replaceAll('-', ' '),
    type: 'name',
  });

  if (!data) {
    return {
      title: "Feat Not Found - Max's DND",
      description: "Feat Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Feat Not Found - Max's DND",
        description: "Feat Not Found - Max's DND",
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
      data.flavorText.length > 157
        ? data.flavorText.substring(0, 157) + '...'
        : data.flavorText,
    openGraph: {
      type: 'website',
      title: `${data.name} - Max's DND`,
      description:
        data.flavorText.length > 157
          ? data.flavorText.substring(0, 157) + '...'
          : data.flavorText,
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
  const feat = await getFeat({
    query: params.featName.replaceAll('-', ' '),
    type: 'name',
  });

  return <FeatPage feat={feat} />;
};

export default Page;
