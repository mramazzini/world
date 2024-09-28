"use client";
import { Item, Spell, Tool, Weapon } from "@prisma/client";

import Tooltip from "./Tooltip";
import { useEffect, useState } from "react";
import { SpellInfo, SubClassInfo } from "@/lib/utils/types/types";
type model = Item | SpellInfo | SubClassInfo;

interface Props<T extends model> {
  potential: T[];
  children: string | string[];
  linkBase: string;
}

const ModelLink = ({ potential, children, linkBase }: Props<model>) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    // Simulate some data preparation time before rendering the tooltip
    setReady(true);
  }, []);
  if (typeof children !== "string") children = children.join("");
  const strRegex = /\d+\{[^}]*\}/g;

  // get all the matches
  const matches = children.match(strRegex);
  if (!matches) return <>{children}</>;

  const newChildren = children.split(strRegex);
  return (
    <>
      {newChildren.map((child, index) => {
        const match = matches[index];
        if (!match) return <span key={index}>{child}</span>;

        const id = match.match(/\d+/);
        if (!id) return <span key={index}>{child}</span>;

        const res = match.match(/\{([^}]+)\}/);
        const modelObj = potential.find(
          (item) => item.id === parseInt(id[0])
        ) as model;
        return (
          <span key={index}>
            {
              ready ? (
                modelObj ? (
                  <Tooltip
                    element={res && res[1] ? res[1] : modelObj.name}
                    title={modelObj.name}
                    link={`/${linkBase}/${modelObj.name.replaceAll(" ", "-")}`}
                    badges={[
                      { text: modelObj.id.toString(), color: "badge-primary" },
                    ]}
                  >
                    {modelObj.description.length < 160
                      ? modelObj.description
                      : modelObj.description.slice(0, 160) + "..."}
                  </Tooltip>
                ) : (
                  res && <span>{res[1] ? res[1] : "Item Loading..."}</span>
                )
              ) : // Just render the raw text if no modelObj
              res ? (
                <span>{res[1] ? res[1] : "Item Loading..."}</span>
              ) : (
                <span>{modelObj.name ? modelObj.name : "Item Loading..."}</span>
              ) // Render the text without the tooltip while loading
            }
          </span>
        );
      })}
    </>
  );
};

export default ModelLink;
