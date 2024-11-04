import { Feature } from '@prisma/client';
import { numberColor, numberColorBefore } from '../../Utility/colorBefore';
import P from '../../Utility/FormatAndSanitize';
import JsonTable from '../../Utility/JsonTable';
import RollRequest from './RollRequest';
import { Fragment } from 'react';

interface Props {
  feature: Feature;
}
const FeatureDisplay = ({ feature }: Props) => {
  return (
    <div className="bg-base-200 p-4 rounded-xl">
      <div className="flex justify-between">
        <h2 className="pb-0">{feature.name}</h2>
        <div className="flex flex-wrap items-center">
          {feature.levels && feature.levels.length == 20 ? (
            <span className="badge badge-accent font-bold rounded-full">
              All Levels
            </span>
          ) : (
            feature.levels?.map((level, index) => {
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

      <div className="divider m-0"></div>
      <p>
        <P>{feature.description}</P>
      </p>
      <div className="divider m-0"></div>

      {feature.options && feature.options.length > 0 && (
        <>
          <ul className="list-disc ">
            {feature.options.map((option, index) => (
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
      {feature.extendedTable && feature.extendedTable.length > 0 && (
        <>
          <div className="bg-base-100">
            <JsonTable json={feature.extendedTable} />
          </div>
          <div className="divider m-0"></div>
        </>
      )}
      {feature.rolls && feature.rolls.length > 0 && (
        <>
          {feature.rolls.map((roll, index) => (
            <RollRequest key={index} name={roll.name} formula={roll.formula} />
          ))}
        </>
      )}
    </div>
  );
};

export default FeatureDisplay;
