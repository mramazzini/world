import { Class } from "@prisma/client";
import Link from "next/link";

interface Props {
  classObj: Class;
}

const GenerateJsonFile = ({ classObj }: Props) => {
  const json = {
    class: classObj,
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
