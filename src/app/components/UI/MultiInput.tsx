import React, { useState, useEffect } from "react";
import Info from "./Info";

interface Props {
  label: string;
  tooltip: string;
  placeholder: string;
  data: string[] | number[];
  numeric?: boolean;
  updateData: (data: string[] | number[]) => void;
}

function MultiInput({
  label,
  tooltip,
  placeholder,
  updateData,
  data,
  numeric = false,
}: Props) {
  const [inputList, setInputList] = useState<number[] | string[]>(data || []);

  const handleInputChange = (index: number, value: string | number) => {
    if (numeric) {
      value = parseInt(value as string);
    }
    const newInputList = [...inputList];
    newInputList[index] = value;
    setInputList(newInputList as string[] | number[]);
  };

  const addInputField = () => {
    setInputList([...inputList, ""] as string[] | number[]);
  };

  const removeInputField = (index: number) => {
    const newInputList = inputList.filter((_, i) => i !== index);
    setInputList(newInputList as string[] | number[]);
  };

  useEffect(() => {
    updateData(inputList);
  }, [inputList, updateData]);

  return (
    <div className="form-control w-full bg-black/30 p-3 rounded-xl">
      <div className="label">
        <span className="label-text">
          {label} <Info tooltip={tooltip} />
        </span>
      </div>
      {inputList.map((input, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type={numeric ? "number" : "text"}
            className="input input-bordered w-full"
            placeholder={placeholder}
            value={numeric ? (input as number) : (input as string)}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button
            type="button"
            className="ml-2 btn btn-danger"
            onClick={() => removeInputField(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={addInputField}
      >
        Add More
      </button>
    </div>
  );
}

export default MultiInput;
