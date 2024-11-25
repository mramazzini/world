import ClassPage from '@/pages-lib/wiki/official/Class.page';
import { Metadata } from 'next';

import '@/lib/string.extensions';
import { getClass } from '@/lib/actions/db/class/read.actions';

import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getClass({
    query: decodeURIComponent(params.slug),
    type: 'slug',
  });
  if (!data) {
    return {
      title: "Class Not Found - Max's DND",
      description: "Class Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Class Not Found - Max's DND",
        description: "Class Not Found - Max's DND",
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
  const classObj = await getClass({
    query: decodeURIComponent(params.slug),
    type: 'slug',
  });
  if (!classObj) {
    //redirect to 404
    notFound();
  }
  return <ClassPage classObj={classObj} />;
};

export default Page;
