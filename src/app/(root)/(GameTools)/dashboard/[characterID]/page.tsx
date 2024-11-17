import CharacterSheet from '@/pages-lib/CharacterSheet/Character.page';
import { getCharacter } from '@/lib/actions/db/character/read.actions';
import { Metadata } from 'next';

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error('DOMAIN_NAME is not defined');
}

interface Props {
  params: { characterID: string };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getCharacter({
    query: params.characterID,
    type: 'id',
  });

  if (!data) {
    return {
      title: "Character Not Found - Max's DND",
      description: "Character Not Found - Max's DND",
      openGraph: {
        type: 'website',
        title: "Character Not Found - Max's DND",
        description: "Character Not Found - Max's DND",
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
    description: 'View and edit your character sheet.',

    openGraph: {
      type: 'website',
      title: `${data.name} - Max's DND`,
      description: 'View and edit your character sheet.',
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

export default async function Page({ params }: Props) {
  return <CharacterSheet characterID={params.characterID} />;
}
