"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import P from "./FormatAndSanitize";

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
  const [position, setPosition] = useState<"left" | "right">("right");
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!tooltipRef.current) return;

    const handleResize = () => {
      if (tooltipRef.current) {
        let element = tooltipRef.current;
        let index = 0;
        while (index != layer) {
          element = element.parentElement as HTMLElement;
          index++;
        }
        const { left, right } = element.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        if (layer > 0) console.log(left, right, screenWidth / 2);
        if (right > screenWidth / 2) {
          setPosition("left");
        } else {
          setPosition("right");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Idk why it wont work with template strings so this is scuffed for now
  if (position === "left") {
    // make tooltip go towards left
    switch (layer) {
      case 0:
        style = {
          group: `text-blue-500 cursor-pointer hover:text-blue-700 group/zero`,
          groupHover: `transform translate-x-[-100%] bg-white group-hover/zero:inline text-sm text-black  rounded p-4 w-[400px] font-bold absolute z-10 hidden shadow-md h-auto`,
        };
        break;
      case 1:
        style = {
          group: `text-red-500 cursor-pointer hover:text-red-700 group/one`,
          groupHover: `transform translate-x-[-100%] group-hover/one:inline text-sm text-black bg-white rounded p-4 w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-green-500 cursor-pointer hover:text-green-700 group/two`,
          groupHover: `transform translate-x-[-100%] group-hover/two:inline text-sm text-black bg-white rounded p-4 w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
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
          groupHover: `group-hover/zero:inline text-sm text-black bg-white rounded p-4 w-[400px] font-bold absolute z-10 hidden  shadow-md transform h-auto

      `,
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
  }

  return (
    <span className={style.group} ref={tooltipRef}>
      {element}
      <span className={style.groupHover}>
        <P layer={layer + 1}>{children || ""}</P>
      </span>
    </span>
  );
};

export default Tooltip;
