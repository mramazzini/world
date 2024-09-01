"use client";

import { Class } from "@prisma/client";
import React from "react";

interface Props {
  setClass: (value: Class) => void;
}
//parse an uploaded json file
const UploadJsonFile = ({ setClass }: Props): React.ReactNode => {
  const [json, setJson] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setError("No file selected");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        setJson(e.target.result);
      }
    };
    reader.readAsText(file);
  };

  const parseJson = () => {
    try {
      const parsed = JSON.parse(json);
      if (parsed.class) {
        setClass(parsed.class);
      }

      setSuccess("Successfully Generated Class.");
      console.log(success);
    } catch (e) {
      console.log(e);
      setError("Error Generating Class. Please check the file and try again.");
    }
  };

  return (
    <div className="form-control bg-black/30 p-2 rounded-xl m-2 ">
      {success ? (
        <div className="text-green-500">{success}</div>
      ) : (
        <>
          <div className="label">
            <span className="label-text">Pick a file</span>
          </div>
          <input className="file-input" type="file" onChange={handleFile} />
          <button className="btn m-2" onClick={parseJson}>
            Generate Class from File
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </>
      )}
    </div>
  );
};

export default UploadJsonFile;
