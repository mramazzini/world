import { CasterType, Class, CustomField, Feature } from "@prisma/client";
import Link from "next/link";

interface Props {
  classObj: Class;
  features: Feature[];
  customFields: CustomField[];
  casterType: CasterType | null;
}

const GenerateJsonFile = ({
  classObj,
  features,
  customFields,
  casterType,
}: Props) => {
  const json = {
    class: classObj,
    features,
    customFields,
    casterType,
  };

  const dataStr = JSON.stringify(json);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = `${classObj.name || "class"}.dndClass`;

  return (
    <div className="form-control bg-black/30 p-4 rounded-xl m-2 ">
      <Link
        className="btn"
        href={dataUri}
        download={exportFileDefaultName}
        target="_blank"
      >
        Save to File
      </Link>
    </div>
  );
};

export default GenerateJsonFile;
