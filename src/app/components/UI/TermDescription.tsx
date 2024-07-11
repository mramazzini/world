"use client";

import React, { useState } from "react";
import "@/lib/string.extensions";

const TermDescription = ({
  term,
  description,
}: {
  term: string;
  description: string;
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <span
        className="font-bold text-blue-500 cursor-pointer hover:underline "
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {term}
        {show && (
          <span className="absolute bg-gray-200 text-black p-1 rounded-md group-hover:block">
            {description}
          </span>
        )}
      </span>{" "}
    </>
  );
};

export default TermDescription;
