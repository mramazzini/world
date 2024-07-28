"use client";
import { useState } from "react";
import { Feature } from "@prisma/client";
import JsonTable from "../Utility/JsonTable";
import React from "react";

interface Props {
  feature: Feature;
  setFeature: (value: Feature) => void;
}
const FeatureTableEditor = ({ feature, setFeature }: Props) => {
  const tables = feature.extendedTable || [];
  const [count, setCount] = useState(0);
  const addTable = () => {
    const newTables = [...tables];
    const newHeaderName = `New Column ${count}`;
    const newHeaderName2 = `New Column ${count + 1}`;
    setCount(count + 2);
    newTables.push({
      "New Table": {
        headers: [newHeaderName, newHeaderName2],
        data: [
          {
            [newHeaderName]: "",
            [newHeaderName2]: "",
          },
        ],
      },
    });
    setFeature({ ...feature, extendedTable: newTables });
  };

  const addRow = (tableIndex: number) => {
    const newTables = [...tables];
    const table = tables[tableIndex];
    const tableName = Object.keys(table)[0];
    const tableData = table[tableName].data;
    const tableHeaders = table[tableName].headers;

    const newRow = {} as { [key: string | number]: string };
    setCount(count + 1);
    tableHeaders.forEach((header) => {
      newRow[header] = "";
    });
    tableData.push(newRow);
    newTables[tableIndex][tableName].data = tableData;
    setFeature({ ...feature, extendedTable: newTables });
  };

  const addHeader = (tableIndex: number) => {
    const newTables = [...tables];
    const table = tables[tableIndex];
    const tableName = Object.keys(table)[0];
    const tableData = table[tableName].data;
    const tableHeaders = table[tableName].headers;
    if (tableHeaders.includes("")) {
      alert(
        "Please make sure all columns have a name before adding a new one."
      );
      return;
    }
    const newHeaderName = `New Column ${count}`;
    setCount(count + 1);
    tableHeaders.push(newHeaderName);
    tableData.forEach((row) => {
      row[newHeaderName] = "";
    });
    setFeature({ ...feature, extendedTable: newTables });
  };

  const updateHeader = (
    tableIndex: number,
    headerIndex: number,
    value: string
  ) => {
    const newTables = [...tables];
    const table = tables[tableIndex];
    const tableName = Object.keys(table)[0];
    const tableData = table[tableName].data;
    const tableHeaders = table[tableName].headers;
    const oldHeader = tableHeaders[headerIndex];
    if (tableHeaders.includes(value)) {
      return oldHeader;
    }

    tableHeaders[headerIndex] = value;
    tableData.forEach((row) => {
      row[value] = row[oldHeader];
      delete row[oldHeader];
    });

    setFeature({ ...feature, extendedTable: newTables });
  };

  const deleteTable = (tableIndex: number) => {
    const newTables = [...tables];
    newTables.splice(tableIndex, 1);
    setFeature({ ...feature, extendedTable: newTables });
  };
  return (
    <>
      {tables.map((table, index) => {
        const tableName = Object.keys(table)[0];
        const tableData = table[tableName].data;
        const tableHeaders = table[tableName].headers;
        return (
          <React.Fragment key={index}>
            <div className="form-control w-full bg-black/30 p-3 rounded-xl my-2">
              <div className="flex flex-row w-full justify-between">
                <h3>
                  Table Name:{" "}
                  <input
                    type="text"
                    className="input input-bordered"
                    value={tableName}
                    onChange={(e) => {
                      const newTables = [...tables];
                      newTables[index][e.target.value] =
                        newTables[index][tableName];
                      delete newTables[index][tableName];
                      setFeature({
                        ...feature,
                        extendedTable: newTables,
                      });
                    }}
                  />
                </h3>
                <button
                  onClick={() => deleteTable(index)}
                  className="bg-red-500 rounded-xl text-white p-2 h-8 w-8 flex items-center justify-center hover:bg-red-700 transition transition-all duration-500"
                >
                  x
                </button>
              </div>

              <table key={index} className="table table-zebra w-full">
                <thead>
                  <tr className="bg-black/30">
                    {tableHeaders.map((header, headerIndex) => (
                      <th key={headerIndex}>
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          value={header}
                          disabled={
                            tableHeaders.find((h) => h === "") ? true : false
                          }
                          onChange={(e) => {
                            updateHeader(index, headerIndex, e.target.value);
                          }}
                        />
                      </th>
                    ))}
                    <th className="w-10">
                      <button
                        onClick={() => addHeader(index)}
                        className="btn btn-success text-white"
                      >
                        +
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => {
                    return (
                      <tr key={rowIndex}>
                        {tableHeaders.map((header, headerIndex) => {
                          return (
                            <td key={headerIndex}>
                              {
                                <textarea
                                  className="textarea textarea-bordered w-full"
                                  value={row[header]}
                                  onChange={(e) => {
                                    const newTables = [...tables];
                                    newTables[index][tableName].data[rowIndex][
                                      header
                                    ] = e.target.value;
                                    setFeature({
                                      ...feature,
                                      extendedTable: newTables,
                                    });
                                  }}
                                />
                              }
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  {/* delete column buttons */}
                  <tr>
                    {tableHeaders.map((header, headerIndex) => {
                      return (
                        <td key={headerIndex}>
                          <button
                            onClick={() => {
                              const newTables = [...tables];
                              const table = tables[index];
                              const tableName = Object.keys(table)[0];
                              const tableData = table[tableName].data;
                              const tableHeaders = table[tableName].headers;
                              const newHeaders = tableHeaders.filter(
                                (h) => h !== header
                              );
                              tableData.forEach((row) => {
                                delete row[header];
                              });
                              newTables[index][tableName].headers = newHeaders;
                              newTables[index][tableName].data = tableData;
                              setFeature({
                                ...feature,
                                extendedTable: newTables,
                              });
                            }}
                            className="btn w-full bg-red-500/80 text-white hover:bg-red-700 transition "
                          >
                            Delete Column
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
              {/* Add row */}
              <button
                onClick={() => addRow(index)}
                className="btn max-w-xs mt-2"
              >
                Add Row
              </button>
            </div>
          </React.Fragment>
        );
      })}
      <button onClick={addTable} className="btn">
        Add Table
      </button>
    </>
  );
};

export default FeatureTableEditor;
