"use client";

import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import P from "./FormatAndSanitize";

const Tooltip = ({
  element,
  children,
  layer = 0,
  format = true,
}: {
  element: ReactNode;
  children?: string;
  layer?: number;
  format?: boolean;
}) => {
  let style: { group: string; groupHover: string } = {
    group: "",
    groupHover: "",
  };
  const [position, setPosition] = useState<"left" | "right">("right");

  // set left or right based on mouse position
  const handleMouseEnter = (e: any) => {
    if (e.clientX > window.innerWidth / 2) {
      setPosition("left");
    } else {
      setPosition("right");
    }
  };

  const handleMouseLeave = () => {};

  //Idk why it wont work with template strings so this is scuffed for now
  if (position === "left") {
    // make tooltip go towards left
    switch (layer) {
      case 0:
        style = {
          group: `text-blue-500 cursor-pointer hover:text-blue-700 group/zero`,
          groupHover: `transform translate-x-[-100%] bg-white group-hover/zero:inline text-sm text-black  rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md h-auto group-focus/zero:inline`,
        };
        break;
      case 1:
        style = {
          group: `text-red-500 cursor-pointer hover:text-red-700 group/one`,
          groupHover: `transform translate-x-[-100%] group-hover/one:inline text-sm text-black bg-white rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-green-500 cursor-pointer hover:text-green-700 group/two`,
          groupHover: `transform translate-x-[-100%] group-hover/two:inline text-sm text-black bg-white rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      default:
        return;
    }
  } else {
    switch (layer) {
      case 0:
        style = {
          group: `text-blue-500 cursor-pointer hover:text-blue-700 group/zero`,
          groupHover: `group-hover/zero:inline text-sm text-black bg-white rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden  shadow-md transform h-auto group-focus/zero:inline
         
      `,
        };
        break;
      case 1:
        style = {
          group: `text-red-500 cursor-pointer hover:text-red-700 group/one`,
          groupHover: `group-hover/one:inline text-sm text-black bg-white rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-green-500 cursor-pointer hover:text-green-700 group/two`,
          groupHover: `group-hover/two:inline text-sm text-black bg-white rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      default:
        return;
    }
  }

  return (
    <span
      className={style.group}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {element}
      <span className={style.groupHover}>
        {format ? <P layer={layer + 1}>{children || ""}</P> : children}
      </span>
    </span>
  );
};

export default Tooltip;
