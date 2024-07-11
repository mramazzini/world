"use client";

import { ReactNode, useState } from "react";
import P from "./FormatAndSanitize";
import { group } from "console";

const numToString = (num: number) => {
  switch (num) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    default:
      console.warn("Number not found in switch statement");
      return "zero";
  }
};

const Tooltip = ({
  element,
  children,
  layer = 0,
}: {
  element: ReactNode;
  children?: string;
  layer?: number;
}) => {
  let style: { group: string; groupHover: string } = {
    group: "",
    groupHover: "",
  };
  //Idk why it wont work with template strings so this is scuffed for now

  switch (layer) {
    case 0:
      style = {
        group: `text-blue-500 cursor-pointer hover:text-blue-700 group/zero`,
        groupHover: `group-hover/zero:inline text-sm text-black bg-white rounded p-4 w-[400px] font-bold absolute z-10 hidden  shadow-md transform h-auto`,
      };
      break;
    case 1:
      style = {
        group: `text-red-500 cursor-pointer hover:text-red-700 group/one`,
        groupHover: `group-hover/one:inline text-sm text-black bg-white rounded p-4 w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
      };
      break;
    case 2:
      style = {
        group: `text-green-500 cursor-pointer hover:text-green-700 group/two`,
        groupHover: `group-hover/two:inline text-sm text-black bg-white rounded p-4 w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
      };
      break;
    default:
      return;
  }

  return (
    <span className={style.group}>
      {element}
      <span className={style.groupHover}>
        <P layer={layer + 1}>{children || ""}</P>
      </span>
    </span>
  );
};

export default Tooltip;
