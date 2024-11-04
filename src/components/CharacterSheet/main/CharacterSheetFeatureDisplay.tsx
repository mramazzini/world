import { calculateLevel } from '@/Utility/characterStateFunctions/calc/calcLevel';
import { numberColor, numberColorBefore } from '@/Utility/colorBefore';
import P from '@/Utility/FormatAndSanitize';
import JsonTable from '@/Utility/JsonTable';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { Fragment, useMemo } from 'react';

interface Props {
  character: CharacterInfo;
}

const CharacterSheetFeatureDisplay = ({ character }: Props) => {
  const calcLevel = character.state ? calculateLevel(character.state) : 1;
  const features = useMemo(() => {
    if (!character.Classes) return [];
    if (!character.Species) return [];
    const ClassFeatures = character.Classes[0].Features.concat(
      character.Classes[0].SpellcastingFeatures
    );
    const SubclassFeatures =
      character.SubClasses && character.SubClasses[0]
        ? character.SubClasses[0].Features
        : [];
    const SpeciesFeatures = character.Species.Features;
    const SubSpeciesFeatures = character.SubSpecies
      ? character.SubSpecies.Features
      : [];
    const FeatFeatures = character.Feats?.flatMap((f) => f.Features) || [];
    const BackgroundFeatures = character.Background?.Features || [];
    return [
      ...ClassFeatures,
      ...SubclassFeatures,
      ...SpeciesFeatures,
      ...SubSpeciesFeatures,
      ...FeatFeatures,
      ...BackgroundFeatures,
    ];
  }, [
    character.Background,
    character.Classes,
    character.Feats,
    character.Species,
    character.SubClasses,
    character.SubSpecies,
  ]);
  return (
    character.state && (
      <>
        {' '}
        <h2 className="pb-0 px-4">Features</h2>
        <div className="divider m-0" />
        {features
          .sort((a, b) => {
            if (a.levels === undefined) return -1; // Put a first if its levels are undefined
            if (b.levels === undefined) return 1; // Put b first if its levels are undefined

            const minA = Math.min(...a.levels);
            const minB = Math.min(...b.levels);

            return minA - minB;
          })
          .filter((f) => !f.levels?.some((level) => level > calcLevel))
          .map((featureInfo, index) => (
            <div
              key={index}
              className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
            >
              <input type="checkbox" />
              <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                <div className="flex flex-row items-center">
                  <h3 className="p-0">{featureInfo.name}</h3>
                  <span className="badge badge-secondary mx-4 font-bold capitalize">
                    {featureInfo.id.split('-')[2]}
                  </span>
                </div>
                <div className="flex flex-wrap items-center">
                  {featureInfo.levels && featureInfo.levels.length == 20 ? (
                    <span className="badge badge-accent font-bold rounded-full">
                      All Levels
                    </span>
                  ) : (
                    featureInfo.levels?.map((level, index) => {
                      return (
                        <div
                          className={`bg-neutral rounded-full w-8 h-8 flex justify-center items-center text-neutral-content font-bold ${numberColor(
                            level
                          )} border border-4 mx-1 before:absolute  before:rounded-full before:border-4 z-[1] before:w-8 before:h-8 ${
                            numberColorBefore[level].bg
                          } ${numberColorBefore[level].opacity}`}
                          key={index}
                        >
                          {level}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              <div className="collapse-content">
                <div className="divider m-0"></div>

                <p className="">
                  <P>{featureInfo.description}</P>
                </p>
                <div className="divider m-0"></div>

                {featureInfo.options && (
                  <>
                    <ul className="list-disc ">
                      {featureInfo.options.map((option, index) => (
                        <Fragment key={index}>
                          <li className="ml-4">
                            <P>{option}</P>
                          </li>
                          <div className="divider m-0"></div>
                        </Fragment>
                      ))}
                    </ul>
                  </>
                )}
                {featureInfo.extendedTable &&
                  featureInfo.extendedTable.length > 0 && (
                    <JsonTable json={featureInfo.extendedTable} />
                  )}
                {featureInfo.postTableData && (
                  <>
                    <div className="bg-base-100">
                      {featureInfo.postTableData}
                    </div>
                    <div className="divider m-0"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        {/* locked features */}
        <div className="divider m-1"></div>
        <h2 className="py-0 px-4">Locked Features</h2>
        <p className="italic px-4">Level up to unlock these features</p>
        <div className="divider m-1" />
        {features
          .filter((f) => f.levels?.some((level) => level > calcLevel))
          .map((featureInfo) => (
            <div
              key={featureInfo.id}
              className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
            >
              <input type="checkbox" />
              <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                <div className="flex flex-row items-center">
                  <h3 className="p-0">{featureInfo.name}</h3>
                  <span className="badge badge-secondary mx-4 font-bold capitalize">
                    {featureInfo.id.split('-')[2]}
                  </span>
                </div>
                <div className="flex flex-wrap items-center">
                  {featureInfo.levels && featureInfo.levels.length == 20 ? (
                    <span className="badge badge-accent font-bold rounded-full">
                      All Levels
                    </span>
                  ) : (
                    featureInfo.levels?.map((level, index) => {
                      return (
                        <div
                          className={`bg-neutral rounded-full w-8 h-8 flex justify-center items-center text-neutral-content font-bold ${numberColor(
                            level
                          )} border border-4 mx-1 before:absolute  before:rounded-full before:border-4 z-[1] before:w-8 before:h-8 ${
                            numberColorBefore[level].bg
                          } ${numberColorBefore[level].opacity}`}
                          key={index}
                        >
                          {level}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              <div className="collapse-content">
                <div className="divider m-0"></div>
                <p>
                  <P>{featureInfo.description}</P>
                </p>
                <div className="divider m-0"></div>
                {featureInfo.options && (
                  <>
                    <ul className="list-disc ">
                      {featureInfo.options.map((option, index) => (
                        <Fragment key={index}>
                          <li className="ml-4">
                            <P>{option}</P>
                          </li>
                          <div className="divider m-0"></div>
                        </Fragment>
                      ))}
                    </ul>
                  </>
                )}
                {featureInfo.extendedTable &&
                  featureInfo.extendedTable.length > 0 && (
                    <>
                      <div className="bg-base-100">
                        <JsonTable json={featureInfo.extendedTable} />
                      </div>
                      <div className="divider m-0"></div>
                    </>
                  )}
                {featureInfo.postTableData && (
                  <>
                    <div className="bg-base-100">
                      {featureInfo.postTableData}
                    </div>
                    <div className="divider m-0"></div>
                  </>
                )}
              </div>
            </div>
          ))}
      </>
    )
  );
};

export default CharacterSheetFeatureDisplay;
