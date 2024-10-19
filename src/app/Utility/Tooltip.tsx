"use client";
import ReactDOM from "react-dom";

import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import P from "./FormatAndSanitize";
import Link from "next/link";
import { Badge } from "@/lib/utils/types/types";

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
  modalId,
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
  modalId?: string;
}) => {
  let style: { group: string; groupHover: string } = {
    group: "",
    groupHover: "",
  };
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<"left" | "right">("right");

  // set left or right based on mouse position
  const handleMouseEnter = (e: any) => {
    if (e.clientX > window.innerWidth / 2) {
      setPosition("left");
    } else {
      setPosition("right");
    }
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 5, // Offset from the bottom of the element
      left: rect.left + window.scrollX,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!tooltipRef.current) return;
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    // Adjust position to avoid going off-screen
    setCoords((prev) => ({
      ...prev,
      left: Math.min(prev.left, window.innerWidth - tooltipRect.width - 10),
    }));
  }, [isHovered]);

  //Idk why it wont work with template strings so this is scuffed for now
  if (position === "left") {
    // make tooltip go towards left
    switch (layer) {
      case 0:
        style = {
          group: `text-primary font-bold cursor-pointer hover:text-primary/70 group/zero relative`,
          groupHover: `transform translate-x-[-100%] bg-neutral group-hover/zero:inline text-sm text-neutral-content  rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-[100]  shadow-md h-auto group-focus/zero:inline`,
        };
        break;
      case 1:
        style = {
          group: `text-secondary cursor-pointer hover:text-secondary/80 group/one relative`,
          groupHover: `transform translate-x-[-100%] group-hover/one:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-[100]  shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-accent cursor-pointer hover:text-accent/80 group/two relative`,
          groupHover: `transform translate-x-[-100%] group-hover/two:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-[100]  shadow-md transform`,
        };
        break;
      default:
        return;
    }
  } else {
    switch (layer) {
      case 0:
        style = {
          group: `text-primary font-bold cursor-pointer hover:text-primary/70 group/zero relative`,
          groupHover: `group-hover/zero:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-[100] shadow-md transform h-auto group-focus/zero:inline
      `,
        };
        break;
      case 1:
        style = {
          group: `text-secondary cursor-pointer hover:text-secondary/80 group/one relative`,
          groupHover: `group-hover/one:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-[100] shadow-md transform`,
        };
        break;
      case 2:
        style = {
          group: `text-accent cursor-pointer hover:text-accent/80 group/two relative`,
          groupHover: `group-hover/two:inline text-sm text-neutral-content bg-neutral rounded p-4 w-[200px] md:w-[400px] font-bold absolute z-[100]  shadow-md transform`,
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
      {link ? (
        <Link target="_blank" href={link}>
          {element}
        </Link>
      ) : (
        element
      )}
      {isHovered &&
        ReactDOM.createPortal(
          <span
            className={style.groupHover}
            ref={tooltipRef}
            style={{
              position: "absolute",
              top: `${coords.top - 5}px`,
              left: `${coords.left}px`,
              zIndex: 1000,
            }}
          >
            {title && (
              <span className="divider m-0 mb-1 divider-primary font-bold">
                <span className="font-bold text-lg">{title}</span>
              </span>
            )}

            {format ? (
              <P layer={layer + 1} modalID={modalId}>
                {children || ""}
              </P>
            ) : (
              children
            )}
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
          </span>,
          modalId
            ? document.getElementById(modalId) || document.body
            : document.body
        )}
    </span>
  );
};

export default Tooltip;
