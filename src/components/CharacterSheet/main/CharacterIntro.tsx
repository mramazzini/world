import { alignmentToText } from '@/Utility/alignmentToText';
import Image from 'next/image';
import { Fragment } from 'react';
import ImageUploadModal from './ImageUploadModal';
import useModal from '@/hooks/useModal';
import { useAppSelector } from '@/store/hooks';
import useLevel from '@/hooks/useLevel';

const CharacterIntro = () => {
  const { id, openModal, closeModal } = useModal();
  const character = useAppSelector((state) => state.character);
  const level = useLevel();
  console.log(character);
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
              href={`/subspecies/${character.SubSpecies?.name.replaceAll(
                ' ',
                '-'
              )}`}
              className="hover:link"
            >
              {character.SubSpecies?.name}
            </a>
          ) : (
            <a
              href={`/species/${character.Species?.name.replaceAll(' ', '-')}`}
              className="hover:link"
            >
              {character.Species?.name}
            </a>
          )}
          ,{' '}
          {character.Classes?.map((c) => (
            <Fragment key={c.name}>
              <a
                href={`/class/${c.name.replaceAll(' ', '-')}`}
                className="hover:link"
              >
                {c.name.toCapitalCase()}
              </a>
            </Fragment>
          ))}
          ,{' '}
          <a
            href={`/background/${character.Background?.name.replaceAll(
              ' ',
              '-'
            )}`}
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
