"use client";

import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import P from "./FormatAndSanitize";
import Link from "next/link";
import { Badge } from "@/lib/types";

const Tooltip = ({
  element,
  children,
  layer = 0,
  format = true,
  title,
  additionalContent,
  link,
  linkText,
  badges,
}: {
  element: ReactNode;
  children?: string;
  layer?: number;
  format?: boolean;
  title?: string;
  additionalContent?: ReactNode;
  link?: string;
  linkText?: string;
  badges?: Badge[];
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
          group: `text-primary font-bold cursor-pointer hover:text-primary/70 group/zero`,
          groupHover: `transform translate-x-[-100%] bg-neutral group-hover/zero:inline text-sm text-neutral-content  rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md h-auto group-focus/zero:inline`,
        };
        break;
      case 1:
        style = {
          group: `text-secondary cursor-pointer hover:text-secondary/80 group/one`,
          groupHover: `transform translate-x-[-100%] group-hover/one:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-accent cursor-pointer hover:text-accent/80 group/two`,
          groupHover: `transform translate-x-[-100%] group-hover/two:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      default:
        return;
    }
  } else {
    switch (layer) {
      case 0:
        style = {
          group: `text-primary font-bold cursor-pointer hover:text-primary/70 group/zero`,
          groupHover: `group-hover/zero:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden  shadow-md transform h-auto group-focus/zero:inline
      `,
        };
        break;
      case 1:
        style = {
          group: `text-secondary cursor-pointer hover:text-secondary/80 group/one`,
          groupHover: `group-hover/one:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-accent cursor-pointer hover:text-accent/80 group/two`,
          groupHover: `group-hover/two:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-10 hidden shadow-md transform`,
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
        {title && (
          <span className="divider m-0 mb-1 divider-primary font-bold">
            <span className="font-bold text-lg">{title}</span>
          </span>
        )}

        {format ? <P layer={layer + 1}>{children || ""}</P> : children}
        {additionalContent}
        {link && (
          <>
            <span className="divider m-0"></span>{" "}
            <span className="flex justify-between">
              <span className="flex flex-row items-center">
                {badges && (
                  <>
                    {badges.map((badge, index) => (
                      <span key={index} className={`badge ${badge.color}`}>
                        {badge.text}
                      </span>
                    ))}
                  </>
                )}
              </span>
              <Link className="btn btn-sm btn-accent " href={link}>
                {linkText ? linkText : "Read More ->"}
              </Link>
            </span>
          </>
        )}
      </span>
    </span>
  );
};

export default Tooltip;
