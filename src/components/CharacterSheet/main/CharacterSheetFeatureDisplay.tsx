import { numberColor, numberColorBefore } from '@/Utility/colorBefore';
import P from '@/Utility/FormatAndSanitize';
import JsonTable from '@/Utility/JsonTable';
import { Fragment, useCallback, useMemo } from 'react';
import { useAppSelector } from '@/store/hooks';
import { Feature } from '@prisma/client';
import useLevelByClass from '@/hooks/useLevelByClass';
import useLevel from '@/hooks/useLevel';
import { FeatureNoDate } from '@/lib/types/modelInfo';
const empty = {
  locked: [] as FeatureNoDate[],
  unlocked: [] as FeatureNoDate[],
};
const CharacterSheetFeatureDisplay = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const levels = useLevelByClass();
  const totalLevel = useLevel();

  const classFeatures = useMemo(() => {
    if (!character) return empty;
    if (!character.CharacterToClass) return empty;
    if (!levels) return empty;
    const ClassFeatures = character.CharacterToClass.reduce(
      (acc, cur) =>
        acc.concat(cur.Class.Features).concat(cur.Class.SpellcastingFeatures),
      [] as Omit<Feature, 'createdAt' | 'updatedAt'>[]
    );
    return {
      locked: ClassFeatures.filter((f) => {
        if (!f.levels || f.levels.length == 0) return false;
        const classLevel = Object.entries(levels).find(
          ([key]) => key === f.classId
        );
        if (!classLevel) return false;
        return Math.min(...f.levels) > classLevel[1];
      }) as FeatureNoDate[],
      unlocked: ClassFeatures.filter((f) => {
        if (!f.levels || f.levels.length == 0) return true;
        const classLevel = Object.entries(levels).find(
          ([key]) => key === f.classId
        );
        if (!classLevel) return false;
        return Math.min(...f.levels) <= classLevel[1];
      }) as FeatureNoDate[],
    };
  }, [character, levels]);

  const features = useMemo(() => {
    if (!character) return empty;
    if (!character.CharacterToClass) return empty;
    if (!character.Species) return empty;

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

    const allFeatures = [
      ...SubclassFeatures,
      ...SpeciesFeatures,
      ...SubSpeciesFeatures,
      ...FeatFeatures,
      ...BackgroundFeatures,
    ];

    return {
      locked: allFeatures.filter((f) => {
        if (!f.levels || f.levels.length == 0) return false;
        return Math.min(...f.levels) > totalLevel;
      }) as FeatureNoDate[],
      unlocked: allFeatures.filter((f) => {
        if (!f.levels || f.levels.length == 0) return true;
        return Math.min(...f.levels) <= totalLevel;
      }) as FeatureNoDate[],
    };
  }, [character, totalLevel]);

  const sortFeatures = useCallback((a: FeatureNoDate, b: FeatureNoDate) => {
    if (a.levels === undefined || a.levels.length == 0) return -1; // Put a first if its levels are undefined
    if (b.levels === undefined || b.levels.length == 0) return 1; // Put b first if its levels are undefined

    const minA = Math.min(...a.levels);
    const minB = Math.min(...b.levels);

    return minA - minB;
  }, []);

  return (
    features && (
      <>
        <h2 className="pb-0 px-4">Features</h2>
        <div className="divider m-0" />
        {features.unlocked
          .concat(classFeatures.unlocked)
          .sort(sortFeatures)
          .filter((f) =>
            f.levels.length > 0 ? f.levels.some((l) => l <= totalLevel) : true
          )
          .map((featureInfo) => (
            <FeatureDisplay key={featureInfo.id} featureInfo={featureInfo} />
          ))}
        {/* class features */}

        {/* locked features */}
        <div className="divider m-1"></div>
        <h2 className="py-0 px-4">Locked Features</h2>
        <p className="italic px-4">Level up to unlock these features</p>
        <div className="divider m-1" />
        {features.locked
          .concat(classFeatures.locked)
          .sort(sortFeatures)
          .filter((f) =>
            f.levels.length > 0 ? f.levels.some((l) => l > totalLevel) : true
          )

          .map((featureInfo) => (
            <FeatureDisplay key={featureInfo.id} featureInfo={featureInfo} />
          ))}
      </>
    )
  );
};

const FeatureDisplay = ({
  featureInfo,
}: {
  featureInfo: Omit<Feature, 'createdAt' | 'updatedAt'>;
}) => {
  return (
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
        {featureInfo.extendedTable && featureInfo.extendedTable.length > 0 && (
          <>
            <div className="bg-base-100">
              <JsonTable json={featureInfo.extendedTable} />
            </div>
            <div className="divider m-0"></div>
          </>
        )}
        {featureInfo.postTableData && (
          <>
            <div className="bg-base-100">{featureInfo.postTableData}</div>
            <div className="divider m-0"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterSheetFeatureDisplay;
