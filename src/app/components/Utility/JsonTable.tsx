import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import { cerr, cinfo, csuccess, cwarn } from "../../../lib/utils/chalkLog";
import React from "react";
const JsonTable = ({ json }: { json: PrismaJson.Table[] }) => {
  //generate the tables
  const result: React.ReactNode[] = [];

  //function to generate a single table
  const generateTable = ({ data }: { data: PrismaJson.Table }) => {
    const key = Object.keys(data)[0];
    const tableData = data[key];
    const tableHeader = tableData["headers"];
    const tableBody = tableData["data"];

    //style for the first cell of each row
    const cellStyle = {
      width: "10%",
    };

    // return the table

    return (
      <div key={key} className={`overflow-x-auto py-2`}>
        <h3>{key}</h3>
        <table className="table table-sm table-zebra">
          <thead>
            <tr className="bg-black/30">
              {tableHeader.map((header: any) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row, index: number) => (
              <tr key={index}>
                {tableHeader.map((header: any, index: number) => (
                  <td key={index} style={index === 0 ? cellStyle : {}}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  //verify table integrity
  console.log(json);
  if (!verifyTableIntegrity(json)) {
    cwarn("Table integrity check failed");
    return <></>;
  }

  //generate tables
  for (const table of json) {
    result.push(generateTable({ data: table }));
  }
  //assign keys
  const tablesWithKeys = result.map((table, index) => {
    return <React.Fragment key={index}>{table}</React.Fragment>;
  });

  return <>{tablesWithKeys}</>;
};

export default JsonTable;
