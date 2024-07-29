import { CasterType, Class, CustomField, Feature } from "@prisma/client";
import Levels from "../UI/Levels";
import JsonTable from "../Utility/JsonTable";
import P from "../Utility/FormatAndSanitize";
import Link from "next/link";
import React from "react";
import UploadJsonFile from "../Utility/UpdateJsonFile";
import GenerateJsonFile from "../Utility/GenerateJsonFile";

const SaveClass = ({
  features,
  classObj,
  customFields,
  casterType,
  setClass,
  setCustomFields,
  setCasterType,
  setFeatures,
  modalID,
}: {
  features: Feature[];
  classObj: Class;
  customFields: CustomField[];
  casterType: CasterType | null;
  setClass: (value: Class) => void;
  setCustomFields: (value: CustomField[]) => void;
  setCasterType: (value: CasterType) => void;
  setFeatures: (value: Feature[]) => void;
  modalID: string | number;
}) => {
  if (typeof modalID === "number") {
    modalID = `modal-${modalID}`;
  }

  return {
    openModal: () => {
      const modal = document.getElementById(modalID) as HTMLDialogElement;
      modal.showModal();
    },

    modal: (
      <dialog id={modalID} className="modal">
        <div className="modal-box">
          <h3 className="flex flex-row justify-between">
            Save Class {classObj.name && " - " + classObj.name} for later
          </h3>
          {/* Downloadable json file with the objects */}
          <GenerateJsonFile
            classObj={classObj}
            features={features}
            customFields={customFields}
            casterType={casterType}
          />
          <div className="divider">OR</div>
          {/* Upload a json file to load the objects */}
          <UploadJsonFile
            setClass={setClass}
            setCustomFields={setCustomFields}
            setCasterType={setCasterType}
            setFeatures={setFeatures}
          />
          <div className="divider"></div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    ),
  };
};

export default SaveClass;
