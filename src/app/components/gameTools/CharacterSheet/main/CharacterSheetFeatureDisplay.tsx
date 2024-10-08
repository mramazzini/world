import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";
import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";
import { CharacterInfo } from "@/lib/utils/types/types";
import { Fragment } from "react";

interface Props {
  character: CharacterInfo;
}

const CharacterSheetFeatureDisplay = ({ character }: Props) => {
  const calcLevel = character.state ? calculateLevel(character.state) : 1;
  return (
    character.state && (
      <>
        {" "}
        <h2 className="pb-0 px-4">Features</h2>
        <div className="divider m-0" />
        {character.state.features
          .sort((a, b) => {
            if (a.feature.levels === undefined) return -1; // Put a first if its levels are undefined
            if (b.feature.levels === undefined) return 1; // Put b first if its levels are undefined

            const minA = Math.min(...a.feature.levels);
            const minB = Math.min(...b.feature.levels);

            return minA - minB;
          })
          .filter(
            (f) =>
              f.feature.levels?.some((level) => level <= calcLevel) ||
              !f.feature.levels
          )
          .map((featureInfo, index) => (
            <div
              key={index}
              tabIndex={0}
              className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
            >
              <input type="checkbox" />
              <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                <div className="flex flex-row items-center">
                  <h3 className="p-0">{featureInfo.feature.name}</h3>
                  <span className="badge badge-secondary mx-4 font-bold">
                    {featureInfo.source}
                  </span>
                </div>
                <div className="flex flex-wrap items-center">
                  {featureInfo.feature.levels &&
                  featureInfo.feature.levels.length == 20 ? (
                    <span className="badge badge-accent font-bold rounded-full">
                      All Levels
                    </span>
                  ) : (
                    featureInfo.feature.levels?.map((level, index) => {
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
                <p className="mb-4">
                  <P>{featureInfo.feature.description}</P>
                </p>
                {featureInfo.feature.extendedTable && (
                  <JsonTable json={featureInfo.feature.extendedTable} />
                )}
                {featureInfo.feature.postTableData && (
                  <>
                    <div className="bg-base-100">
                      {featureInfo.feature.postTableData}
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
        {character.state.features
          .filter(
            (f) =>
              !(
                f.feature.levels?.some((level) => level <= calcLevel) ||
                !f.feature.levels
              )
          )
          .map((featureInfo, index) => (
            <div
              key={`${featureInfo.feature.name}-${featureInfo.source}`}
              tabIndex={0}
              className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
            >
              <input type="checkbox" />
              <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
                <div className="flex flex-row items-center">
                  <h3 className="p-0">{featureInfo.feature.name}</h3>
                  <span className="badge badge-secondary mx-4 font-bold">
                    {featureInfo.source}
                  </span>
                </div>
                <div className="flex flex-wrap items-center">
                  {featureInfo.feature.levels &&
                  featureInfo.feature.levels.length == 20 ? (
                    <span className="badge badge-accent font-bold rounded-full">
                      All Levels
                    </span>
                  ) : (
                    featureInfo.feature.levels?.map((level, index) => {
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
                <p>
                  <P>{featureInfo.feature.description}</P>
                </p>
                <div className="divider m-0"></div>
                {featureInfo.feature.options && (
                  <>
                    <ul className="list-disc ">
                      {featureInfo.feature.options.map((option, index) => (
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
                {featureInfo.feature.extendedTable && (
                  <>
                    <div className="bg-base-100">
                      <JsonTable json={featureInfo.feature.extendedTable} />
                    </div>
                    <div className="divider m-0"></div>
                  </>
                )}
                {featureInfo.feature.postTableData && (
                  <>
                    <div className="bg-base-100">
                      {featureInfo.feature.postTableData}
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
