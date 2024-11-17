import { alignmentToText } from '@/Utility/alignmentToText';
import Image from 'next/image';
import { Fragment } from 'react';
import ImageUploadModal from './ImageUploadModal';
import useModal from '@/hooks/useModal';
import { useAppSelector } from '@/store/hooks';
import useLevel from '@/hooks/useLevel';
import Skeleton from '@/components/UI/Skeleton';

const CharacterIntro = () => {
  const { id, openModal, closeModal } = useModal();
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const level = useLevel();

  if (!character) return <Skeleton height={128} />;

  return (
    <>
      <ImageUploadModal modalid={id} />
      {character.imageURL ? (
        <Image
          src={character.imageURL}
          width={200}
          height={200}
          className="rounded-lg w-[100px] h-[100px] object-cover object-center mr-4 btn btn-ghost p-0"
          alt="Character Image Not Found"
          onClick={() => {
            closeModal();
          }}
        />
      ) : (
        <Image
          src="/images/camera.svg"
          width={200}
          height={200}
          className="w-[100px] h-[100px] btn-ghost object-cover object-center mr-4  btn p-0 opacity-70 border-gray-500"
          onClick={() => {
            openModal();
          }}
          alt="Fighter"
        />
      )}
      <div className="flex flex-col justify-">
        <h2>
          {character.name}
          <div className="divider m-0 divider-primary"></div>
        </h2>

        <p className="italic">
          Level {level},{' '}
          {character.SubSpecies ? (
            <a
              href={`/subspecies/${character.SubSpecies?.slug}`}
              className="hover:link"
            >
              {character.SubSpecies?.name}
            </a>
          ) : (
            <a
              href={`/species/${character.Species?.slug}`}
              className="hover:link"
            >
              {character.Species?.name}
            </a>
          )}
          ,{' '}
          {character.CharacterToClass?.map((c) => (
            <Fragment key={c.Class.name}>
              <a href={`/class/${c.Class.slug}`} className="hover:link">
                {c.Class.name}
              </a>
            </Fragment>
          ))}
          ,{' '}
          <a
            href={`/background/${character.Background?.slug}`}
            className="hover:link"
          >
            {character.Background?.name}
          </a>{' '}
        </p>
        <p className="italic font-bold">
          {alignmentToText(character.alignment)}
        </p>
      </div>
    </>
  );
};

export default CharacterIntro;
