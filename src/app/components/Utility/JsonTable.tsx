import { Prisma } from "@prisma/client";
import { cerr, cinfo, csuccess, cwarn } from "../../../lib/utils/chalkLog";
import React from "react";
const JsonTable = ({ json }: { json: Prisma.JsonArray }) => {
  //Tables must be an array of objects
  if (!Array.isArray(json)) {
    cerr("Table must be an array of objects");
    return null;
  }
  const tables = [];
  for (const obj of json) {
    if (typeof obj !== "object") {
      cerr("Table must be an array of objects");
      return null;
    }
    tables.push(obj as Object);
  }

  //make sure all objects only have one key
  // since each object represents a single table, the key is the table name

  for (const obj of tables) {
    if (Object.keys(obj).length !== 1) {
      cerr("Each object in the table must have only one key");
      return null;
    }
  }

  //generate the tables
  const result: React.ReactNode[] = [];
  const generateTable = ({
    key,
    data,
  }: {
    key: string | number;
    data: any;
  }) => {
    const table = data[key];
    const tableHeader = Object.keys(table[0]);
    const tableBody = table.map((row: any) => {
      return Object.values(row);
    });
    const cellWidth = tableHeader.length > 1 ? 90 / tableHeader.length - 1 : 90;
    const cellStyle = {
      width: `${cellWidth}%`,
    };
    return (
      <div key={key} className={`overflow-x-auto  py-2 `}>
        <h3>{key}</h3>
        <table className="table table-sm table-zebra">
          <thead>
            <tr>
              {tableHeader.map((header: any) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row: any, index: number) => (
              <tr key={index}>
                {row.map((cell: any, index: number) => (
                  <td
                    style={
                      index == 0
                        ? {
                            width: "10%",
                          }
                        : cellStyle
                    }
                    key={index}
                  >
                    <p className="min-w-[50px]">{cell}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  for (const obj of tables) {
    const key = Object.keys(obj)[0];
    const table = generateTable({ key, data: obj });
    result.push(table);
  }

  //assign keys
  const tablesWithKeys = result.map((table, index) => {
    return <React.Fragment key={index}>{table}</React.Fragment>;
  });

  return <>{tablesWithKeys}</>;
};

export default JsonTable;
