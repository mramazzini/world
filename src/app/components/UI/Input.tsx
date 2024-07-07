"use client";
import React, { useState } from "react";

type InputType = string | number;
interface Props<T extends InputType> {
  data: T;
  setData: (data: T) => void;
  name: string;
  description?: string;
  isNumeric?: boolean;
  options?: T[];
  placeholder?: string;
}

//Class for a single input field. Do not have add and remove functions

const Input = <T extends InputType>({
  data,
  setData,
  name,
  description,
  isNumeric = false,
  options = undefined,
  placeholder = "Enter value",
}: Props<T>) => {
  const change = (val: T) => {
    if (isNumeric) val = parseInt(val as unknown as string) as unknown as T;
    setData(val);
  };

  return (
    <div className="p-4">
      <h2>{name}</h2>
      {description && <p className="mb-2">{description}</p>}
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
        <label className="form-control w-full max-w-xs">
          <input
            className="input input-primary"
            placeholder={placeholder}
            value={data as unknown as string}
            onChange={(e) => {
              e.preventDefault();
              change(e.target.value as unknown as T);
            }}
            type={isNumeric ? "number" : "text"}
          />
        </label>
      )}
    </div>
  );
};

export default Input;
