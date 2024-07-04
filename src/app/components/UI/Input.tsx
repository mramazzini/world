"use client";
import React, { useState } from "react";

type ListType = string | number;
interface Props<T extends ListType> {
  data: T;
  setData: (data: T) => void;
  name: string;
  description?: string;
  isNumeric?: boolean;
  options?: T[];
}

//Class for a single input field. Do not have add and remove functions

const Input = <T extends ListType>({
  data,
  setData,
  name,
  description,
  isNumeric = false,
  options = undefined,
}: Props<T>) => {
  const change = (val: T) => {
    if (isNumeric) val = parseInt(val as unknown as string) as unknown as T;
    setData(val);
  };

  return (
    <div className="p-4">
      <h2>{name}</h2>
      {description && <h3 className="mb-2">{description}</h3>}
      {options ? (
        <select
          className="select select-primary my-2"
          onChange={(e) => {
            e.preventDefault();
            change(e.target.value as unknown as T);
          }}
          defaultValue={data as unknown as string}
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="input input-primary my-2"
          placeholder="Enter value"
          value={data as unknown as string}
          onChange={(e) => {
            e.preventDefault();
            change(e.target.value as unknown as T);
          }}
          type={isNumeric ? "number" : "text"}
        />
      )}
    </div>
  );
};

export default Input;
