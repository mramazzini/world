"use client";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";
import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { memoizeGetItem } from "@/app/components/Utility/globalCache";
import { ItemInfo } from "@/lib/types";
interface Props {
  inventory: PrismaJson.QuantityItem[];
}

const RenderItemFeature = ({
  feature,
  item,
}: {
  feature: PrismaJson.Feature;
  item: ItemInfo;
}) => {
  return (
    <div
      tabIndex={0}
      className="bg-base-300 rounded-xl p-4 collapse collapse-arrow mt-2 collapse-sm py-0"
    >
      <input type="checkbox" />
      <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
        <div className="flex flex-row items-center">
          <h3 className="p-0">{feature.name}</h3>
          <span className="badge badge-secondary mx-4 font-bold">
            {item.name}
          </span>
        </div>
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
      <div className="collapse-content">
        <p className="mb-4">
          <P>{feature.description}</P>
        </p>
        {feature.extendedTable && <JsonTable json={feature.extendedTable} />}
        {feature.postTableData && (
          <>
            <div className="bg-base-100">{feature.postTableData}</div>
            <div className="divider m-0"></div>
          </>
        )}
      </div>
    </div>
  );
};

const ItemFeatures = ({ inventory }: Props) => {
  const [items, setItems] = useState<ItemInfo[]>([]);
  useEffect(() => {
    const promises = inventory.map((item) => memoizeGetItem(item.item));
    Promise.all(promises).then((items) => {
      setItems(items);
    });
  }, [inventory.length]);
  return (
    <section className=" bg-base-200 rounded-xl p-4 col-span-12">
      <h2 className="pb-0 px-4">Features</h2>
      <div className="divider m-0"></div>
      {items.map((i, index) => {
        return (
          <Fragment key={index}>
            {i.features.map((f, index) => (
              <RenderItemFeature key={index} feature={f} item={i} />
            ))}

            {i.Tool?.features.map((f, index) => (
              <RenderItemFeature key={index} feature={f} item={i} />
            ))}
            {i.Armor?.features.map((f, index) => (
              <RenderItemFeature key={index} feature={f} item={i} />
            ))}
          </Fragment>
        );
      })}
    </section>
  );
};

export default ItemFeatures;
