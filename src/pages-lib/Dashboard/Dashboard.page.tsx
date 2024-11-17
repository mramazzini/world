'use client';
import { alignmentToText } from '@/Utility/alignmentToText';
import '@/lib/string.extensions';
import { getCharactersByUser } from '@/lib/actions/db/character/read.actions';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { getUserId } from '@/lib/utils/auth';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useCallback, useEffect, useState } from 'react';
import DashboardSkeleton from '@/components/Dashboard/DashboardSkeleton';
import CreateCharacterModal from '@/components/Dashboard/CreateCharacterModal';
import ConfirmModal from '@/components/Modals/ConfirmModal';
import useModal from '@/hooks/useModal';
import ModalButton from '@/components/UI/Modal/ModalButton';
import { deleteCharacter } from '@/lib/actions/db/character/delete.actions';

const Dashboard = () => {
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);
  const [loadingCharacters, setCharactersLoading] = useState(true);
  const { id } = useModal();
  const [removeCharacterId, setRemoveCharacterId] = useState<string | null>(
    null
  );

  const calcLevel = useCallback((c: CharacterInfo) => {
    let level = 0;
    level += c
      ? c.CharacterToClass.reduce((acc, c) => acc + c.levelsInClass, 0)
      : 1;
    return level;
  }, []);

  useEffect(() => {
    getUserId().then((user) => {
      if (!user) return;
      getCharactersByUser(user).then((data) => {
        setCharacters(data);
        setCharactersLoading(false);
      });
    });
  }, []);

  const handleRemoveCharacter = useCallback(() => {
    if (removeCharacterId) {
      deleteCharacter(removeCharacterId)
        .then(() => {
          setCharacters(characters.filter((c) => c.id !== removeCharacterId));
        })
        .catch((error) => {
          console.error('Failed to delete character:', error);
        })
        .finally(() => {
          setRemoveCharacterId(null);
        });
    }
  }, [characters, removeCharacterId]);

  return (
    <>
      <ConfirmModal
        id={id}
        message="Are you sure you want to delete this character? This cannot be undone."
        onConfirm={handleRemoveCharacter}
      />
      <div className="flex flex-col p-4 md:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          <section className="flex flex-col items-center justify-start bg-base-300 rounded-xl p-4  gap-4 h-[80vh] w-full  ">
            <div className="flex grow bg-base-200 w-full p-4 flex flex-col xl:flex-row items-center h-auto justify-between">
              <h2 className="text-2xl">
                Your Characters
                <div className="divider m-0 divider-secondary" />
              </h2>

              <CreateCharacterModal />
            </div>
            <div className="divider m-0 divider-primary"></div>
            <div className="flex flex-col items-center justify-start h-[80%] overflow-auto w-full gap-4">
              {loadingCharacters && <DashboardSkeleton />}
              {characters.length === 0 && !loadingCharacters && (
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="text-2xl">No Characters Found</h2>
                  <p>
                    You have not created any characters yet. Click the button
                    above to create your first character.
                  </p>
                </div>
              )}
              {characters.map((character) => (
                <div
                  key={character.id}
                  className="bg-base-200 w-full p-4 flex flex-col xl:flex-row items-center h-auto justify-start gap-4 "
                >
                  <Image
                    src={character.imageURL || '/images/hero.jpg'}
                    width={200}
                    height={200}
                    className="rounded-lg w-[100px] h-[100px] object-cover object-center "
                    alt="Fighter"
                  />
                  <div className="flex flex-col ">
                    <h2>
                      {character.name}
                      <div className="divider m-0 divider-primary"></div>
                    </h2>

                    <p className="italic">
                      Level {calcLevel(character)},{' '}
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
                        <Fragment key={c.classId}>
                          <a
                            href={`/class/${c.Class.slug}`}
                            className="hover:link"
                          >
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
                  <div className="flex flex-row xl:flex-col items-end gap-4 grow mt-4 xl:mt-0">
                    <Link
                      href={`/dashboard/${character.id}`}
                      className="btn btn-accent w-40"
                    >
                      View Character -&gt;
                    </Link>
                    <ModalButton
                      modalid={id}
                      modaltype="open"
                      onClick={() => {
                        setRemoveCharacterId(character.id);
                      }}
                      className="btn btn-error w-40"
                    >
                      Delete Character
                    </ModalButton>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="flex flex-col items-center justify-start bg-base-300 rounded-xl p-4 lg:w-1/2 gap-4 h-[80vh]  w-full">
            <div className="flex grow bg-base-200 w-full p-4 flex flex-col xl:flex-row items-center h-auto justify-between">
              <h2 className="text-2xl">
                Your Homebrew
                <div className="divider m-0 divider-secondary" />
              </h2>
              <Link href="/workshop" className="btn btn-ghost border-gray-500">
                Create Homebrew -&gt;
              </Link>
            </div>
            <div className="divider m-0 divider-primary"></div>
            <div className="flex flex-col items-center justify-start h-[80%] overflow-auto w-full gap-4"></div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
