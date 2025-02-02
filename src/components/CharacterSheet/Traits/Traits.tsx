'use client';
import JsonTable from '@/Utility/JsonTable';
import Tooltip from '@/Utility/Tooltip';
import { setCharacterState } from '@/store/sheetSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import TraitEditor from './TraitEditor';
import { CharacterState } from '@prisma/client';
import BiographyEditor from './BiographyEditor';

const Traits = () => {
  const state = useCharacterState();
  const background = useAppSelector(
    (state) => state.sheet.rawCharacter?.Background
  );
  const dispatch = useAppDispatch();

  const setState = (newState: CharacterState) => {
    dispatch(setCharacterState(newState));
  };

  const traitLength = background?.traits?.length || 0;
  const idealsLength = background?.ideals?.length || 0;
  const bondsLength = background?.bonds?.length || 0;
  const flawsLength = background?.flaws?.length || 0;

  if (!state) return null;

  return (
    <div className="flex flex-col w-full bg-base-200 p-4">
      <h2 className="font-bold">Personality Traits</h2>
      <p>
        Write down your character&apos;s traits, ideals, bonds, and flaws here.
      </p>
      <p>
        Use{' '}
        <a
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
          className="link link-primary"
          rel="noreferrer"
        >
          Markdown
        </a>{' '}
        to format your text.
      </p>

      <div className="divider m-0"></div>
      <h2 className="font-bold w-full text-center">About </h2>
      <div className="divider m-0"></div>
      <BiographyEditor
        buttonText="Biography"
        note={state.biography}
        index={0}
        updateNote={(note) => {
          setState({ ...state, biography: note });
        }}
      />
      <div className="divider m-0"></div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <TraitEditor
          title="Personality Traits"
          buttonText="Personality Traits"
          data={state.personalityTraits}
          setData={(traits) => {
            setState({ ...state, personalityTraits: traits });
          }}
          tooltip={
            <Tooltip
              title="Personality Traits"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        '': {
                          headers: [
                            `d${traitLength.toString()}`,
                            'Personality Trait',
                          ],
                          data:
                            background?.traits.map((trait, index) => {
                              return {
                                [`d${traitLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                'Personality Trait': trait || '',
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Personality traits are small quirks or habits that define your
              character&apos;s personality. They can be anything from
              &quot;I&apos;m always polite and respectful&quot; to &quot;I
              can&apos;t resist a pretty face.&quot;
            </Tooltip>
          }
        />
        <TraitEditor
          title="Ideals"
          buttonText="Ideals"
          data={state.ideals}
          setData={(ideals) => {
            setState({ ...state, ideals });
          }}
          tooltip={
            <Tooltip
              title="Ideals"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        '': {
                          headers: [`d${idealsLength.toString()}`, 'Ideal'],
                          data:
                            background?.ideals.map((ideal, index) => {
                              return {
                                [`d${idealsLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                Ideal: ideal || '',
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Ideals are beliefs that drive your character&apos;s actions. They
              can be anything from &quot;Respect&quot; to
              &quot;Independence.&quot;
            </Tooltip>
          }
        />
        <TraitEditor
          title="Bonds"
          buttonText="Bonds"
          data={state.bonds}
          setData={(bonds) => {
            setState({ ...state, bonds });
          }}
          tooltip={
            <Tooltip
              title="Bonds"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        '': {
                          headers: [`d${bondsLength.toString()}`, 'Bond'],
                          data:
                            background?.bonds.map((bond, index) => {
                              return {
                                [`d${bondsLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                Bond: bond || '',
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Bonds are connections to people, places, or things that are
              important to your character. They can be anything from &quot;My
              family&quot; to &quot;My homeland.&quot;
            </Tooltip>
          }
        />
        <TraitEditor
          title="Flaws"
          buttonText="Flaws"
          data={state.flaws}
          setData={(flaws) => {
            setState({ ...state, flaws });
          }}
          tooltip={
            <Tooltip
              title="Flaws"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        '': {
                          headers: [`d${flawsLength.toString()}`, 'Flaw'],
                          data:
                            background?.flaws.map((flaw, index) => {
                              return {
                                [`d${flawsLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                Flaw: flaw || '',
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Flaws are weaknesses or imperfections that your character has.
              They can be anything from &quot;I have a weakness for the vices of
              the city&quot; to &quot;I&apos;m always in debt.&quot;
            </Tooltip>
          }
        />
      </div>
    </div>
  );
};

export default Traits;
