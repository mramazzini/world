"use client";
// Component to be placed in Forms to output an array of certain values
// Template value is the value of the type of array
// User can add or remove values from the array
// User can also change the values in the array

import React, { useState } from "react";
type ListType = string | number;
interface Props<T extends ListType> {
  data: T[];
  setData: (data: T[]) => void;
  name: string;
  description?: string;
  isNumeric?: boolean;
  options?: T[];
}

const List = <T extends ListType>({
  data,
  setData,
  name,
  description,
  isNumeric = false,
  options = undefined,
}: Props<T>) => {
  const add = (val: T) => {
    if (isNumeric) val = parseInt(val as unknown as string) as unknown as T;
    if (options && options.length > 0) val = options[0];

    const newData = [...data];
    newData.push(val);
    if (isNumeric) {
      newData.sort((a, b) => (a as number) - (b as number));
    } else {
      newData.sort();
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
    <div className="p-4">
      <h2>{name}</h2>
      {description && <h3 className="mb-2">{description}</h3>}
      <ul>
        {data.map((val, index) => (
          <li key={index}>
            {options ? (
              <select
                className="select select-primary my-2"
                value={val}
                onChange={(e) => change(index, e.target.value as unknown as T)}
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
                value={val}
                placeholder="Enter value"
                onChange={(e) => {
                  e.preventDefault();
                  change(index, e.target.value as unknown as T);
                }}
                type={isNumeric ? "number" : "text"}
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  if (isNumeric) {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }
                }}
              />
            )}

            <button
              className="btn ml-2 btn-error"
              onClick={(e) => {
                e.preventDefault();
                remove(index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="btn my-2 btn-primary"
        onClick={(e) => {
          e.preventDefault();
          add("" as T);
        }}
      >
        Add {name}
      </button>
    </div>
  );
};

export default List;
