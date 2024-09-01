"use client";
import { useRouter } from "next/navigation";
import P from "../Utility/FormatAndSanitize";
import { useState } from "react";

//function to generate a single table
const GenerateTable = ({ data }: { data: PrismaJson.Table }) => {
  const [loadingLink, setLoadingLink] = useState(false);
  const router = useRouter();
  const key = Object.keys(data)[0];
  const tableData = data[key];
  const tableHeader = tableData["headers"];
  const tableBody = tableData["data"];
  const colSizes = tableData["headersLength"];
  const tableLinks = tableData["links"];
  //style for the first cell of each row
  let firstCellStyle = colSizes
    ? { width: `${colSizes[0]}%`, fontWeight: "bold" }
    : { width: "15%" };

  //style for the rest of the cells
  const cellStyle = colSizes
    ? colSizes.map((size) => {
        return { width: `${size}%` };
      })
    : //default col size
      tableHeader.map(() => {
        return { width: `${100 / tableHeader.length}%` };
      });

  // return the table
  const handleLinkLoad = () => {
    setLoadingLink(true);
    setTimeout(() => {
      setLoadingLink(false);
    }, 5000);
  };
  return (
    <div
      key={key}
      className={`overflow-y-visible ${loadingLink && "cursor-wait"}`}
    >
      {key && <h3 className="py-2">{key}</h3>}
      <table className="table table-sm table-zebra overflow-y-visible">
        <thead>
          <tr className="bg-black/30">
            {tableHeader.map((header: any) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row, index: number) => (
            <tr
              key={index}
              className={`${
                tableLinks
                  ? `hover ${loadingLink ? "cursor-wait" : "cursor-pointer"}`
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();

                if (tableLinks) {
                  handleLinkLoad();
                  const link = tableLinks[index];
                  if (link) {
                    router.push(link);
                  }
                }
              }}
            >
              {tableHeader.map((header: any, index: number) => (
                <td
                  key={index}
                  style={index === 0 ? firstCellStyle : cellStyle[index]}
                  className={`${
                    tableLinks && index === 0 ? "text-primary font-bold" : ""
                  }`}
                >
                  <P>{row[header]}</P>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenerateTable;
