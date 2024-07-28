"use client";
// Component to be placed in Forms to output an array of certain values
// Template value is the value of the type of array
// User can add or remove values from the array
// User can also change the values in the array

import React, { useState } from "react";
import "@/lib/string.extensions";
import Info from "./Info";
type ListType = string | number;
interface Props<T extends ListType> {
  data: T[];
  setData: (data: T[]) => void;
  name: string;
  description?: string;
  isNumeric?: boolean;
  options: T[];
  tooltip: string;
}

const MultiOptions = <T extends ListType>({
  data,
  setData,
  name,
  description,
  isNumeric = false,
  options,
  tooltip,
}: Props<T>) => {
  const add = (val: T) => {
    if (isNumeric) val = parseInt(val as unknown as string) as unknown as T;
    if (options && options.length > 0) val = options[0];

    const newData = [...data];
    newData.push(val);
    if (isNumeric) {
      newData.sort((a, b) => (a as number) - (b as number));
    }
    setData(newData);
  };

  const remove = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  const change = (index: number, val: T) => {
    const newData = [...data];
    if (isNumeric) val = parseInt(val as unknown as string) as unknown as T;
    newData[index] = val;

    // sort data
    if (isNumeric) {
      newData.sort((a, b) => (a as number) - (b as number));
    } else {
      newData.sort();
    }

    setData(newData);
  };

  return (
    <>
      <div className="form-control w-full bg-black/30 p-3 rounded-xl">
        <div className="label">
          <span className="label-text">
            {name} <Info tooltip={tooltip} />
          </span>
        </div>{" "}
        {description && <p className="mb-2">{description}</p>}
        {data.map((val, index) => (
          <div key={index} className="flex items-center mb-2">
            <select
              className="select select-sm select-bordered w-full max-w-xs"
              value={val}
              onChange={(e) => change(index, e.target.value as unknown as T)}
            >
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {option.toString().toCapitalCase().replace(/_/g, " ")}
                </option>
              ))}
            </select>

            <button
              className="btn ml-2 btn-error btn-sm"
              onClick={(e) => {
                e.preventDefault();
                remove(index);
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <button onClick={() => add(data[0])} className="btn btn-primary">
          Add {name}
        </button>{" "}
      </div>
    </>
  );
};

export default MultiOptions;
