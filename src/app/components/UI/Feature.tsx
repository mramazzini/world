import { numberColor, numberColorBefore } from "../Utility/colorBefore";
import P from "../Utility/FormatAndSanitize";
import JsonTable from "../Utility/JsonTable";

interface Props {
  feature: PrismaJson.Feature;
}
const Feature = ({ feature }: Props) => {
  if (feature.hideInSheet) return null;
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
      {feature.options && (
        <>
          <ul className="list-disc ">
            {feature.options.map((option, index) => (
              <>
                <li key={index} className="ml-4">
                  <P>{option}</P>
                </li>
                <div className="divider m-0"></div>
              </>
            ))}
          </ul>
        </>
      )}
      {feature.extendedTable && (
        <>
          <div className="bg-base-100">
            <JsonTable json={feature.extendedTable} />
          </div>
          <div className="divider m-0"></div>
        </>
      )}
    </div>
  );
};

export default Feature;
