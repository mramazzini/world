import { getFeatureGroup } from '@/lib/actions/db/feature-group/read.actions';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '@/lib/string.extensions';
import FeatureGroupPage from '@/pages-lib/wiki/official/FeatureGroup.page';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getFeatureGroup({
    query: decodeURIComponent(params.slug),
    type: 'slug',
  });
  if (!data) {
    return {
      title: "Feature Group Not Found - Max's DND",
      description: "Feature Group Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Feature Group Not Found - Max's DND",
        description: "Feature Group Not Found - Max's DND",
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
    title: `${data.name.toCapitalCase()} - Max's DND`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + '...'
        : data.description,
    openGraph: {
      type: 'website',
      title: `${data.name.toCapitalCase()} - Max's DND`,
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
  const featureGroup = await getFeatureGroup({
    query: decodeURIComponent(params.slug),
    type: 'slug',
  });
  if (!featureGroup) {
    return notFound();
  }
  return <FeatureGroupPage featureGroup={featureGroup} />;
};

export default Page;
