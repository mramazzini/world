import { Metadata } from 'next';

import '@/lib/string.extensions';

import { getBackground } from '@/lib/actions/db/background/read.actions';
import BackgroundPage from '@/pages-lib/wiki/official/Background.page';

import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBackground({
    query: decodeURIComponent(params.slug),
    type: 'slug',
  });

  if (!data) {
    return {
      title: "Background Not Found - Max's DND",
      description: "Background Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Background Not Found - Max's DND",
        description: "Background Not Found - Max's DND",

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
  const background = await getBackground({
    query: decodeURIComponent(params.slug),
    type: 'slug',
  });
  if (!background) {
    notFound();
  }

  return <BackgroundPage background={background} />;
};

export default Page;
