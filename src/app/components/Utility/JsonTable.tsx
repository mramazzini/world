import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import { cerr, cinfo, csuccess, cwarn } from "../../../lib/utils/chalkLog";
import React from "react";
import GenerateTable from "../UI/GenerateTable";
const JsonTable = ({
  json,

  links,
}: {
  json: PrismaJson.Table[];

  links?: string[] | undefined;
}) => {
  //generate the tables
  const result: React.ReactNode[] = [];

  //verify table integrity

  if (!verifyTableIntegrity(json)) {
    cwarn("Table integrity check failed");
    return <></>;
  }

  //generate tables
  for (const table of json) {
    result.push(<GenerateTable data={table} links={links} />);
  }
  //assign keys
  const tablesWithKeys = result.map((table, index) => {
    return <React.Fragment key={index}>{table}</React.Fragment>;
  });

  return <>{tablesWithKeys}</>;
};

export default JsonTable;
