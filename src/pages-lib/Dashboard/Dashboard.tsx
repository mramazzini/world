'use client';
import { alignmentToText } from '@/Utility/alignmentToText';
import { calculateLevel } from '@/Utility/characterStateFunctions/calc/calcLevel';
import '@/lib/string.extensions';
import { getCharactersByUser } from '@/lib/actions/db/character/read.actions';
import { CharacterInfo } from '@/lib/types/types';
import { getUserId } from '@/lib/utils/auth';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import DashboardSkeleton from '@/components/Dashboard/DashboardSkeleton';
import CreateCharacterModal from '@/components/Dashboard/CreateCharacterModal';

const Dashboard = () => {
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);
  const [loadingCharacters, setCharactersLoading] = useState(true);
  // const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  // const [loadingCampaigns, setCampaignsLoading] = useState(true);
  useEffect(() => {
    getUserId().then((user) => {
      getCharactersByUser(user).then((data) => {
        setCharacters(data);
        setCharactersLoading(false);
      });
    });
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 md:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          <section className="flex flex-col items-center justify-start bg-base-300 rounded-xl p-4 lg:w-1/2 gap-4 h-[80vh] w-full  ">
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

              {characters.map((character) => (
                <div
                  key={character.id}
                  className="bg-base-200 w-full p-4 flex flex-col xl:flex-row items-center h-auto justify-start "
                >
                  <Image
                    src={character.imageURL || '/images/hero.jpg'}
                    width={200}
                    height={200}
                    className="rounded-lg w-[100px] h-[100px] object-cover object-center mr-4"
                    alt="Fighter"
                  />
                  <div className="flex flex-col justify-">
                    <h2>
                      {character.name}
                      <div className="divider m-0 divider-primary"></div>
                    </h2>

                    <p className="italic">
                      Level{' '}
                      {character.state ? calculateLevel(character.state) : 1},{' '}
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
                          href={`/species/${character.Species?.name.replaceAll(
                            ' ',
                            '-'
                          )}`}
                          className="hover:link"
                        >
                          {character.Species?.name}
                        </a>
                      )}
                      ,{' '}
                      {character.Classes?.map((c) => (
                        <Fragment key={c.id}>
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
                  <Link
                    href={`/dashboard/${character.id}`}
                    className="btn btn-accent xl:ml-auto mt-4 xl:mt-0"
                  >
                    View Character -&gt;
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center justify-start bg-base-300 rounded-xl p-4 lg:w-1/2 gap-4 h-[80vh]  w-full">
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
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
