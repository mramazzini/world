import { cerr } from "@/lib/utils/chalkLog";

const verifyTableIntegrity = (table: PrismaJson.Table[]): Boolean => {
  if (!Array.isArray(table)) {
    cerr("Table must be an array of objects");
    return false;
  }
  const tables = [];
  for (const obj of table) {
    if (typeof obj !== "object") {
      cerr("Table must be an array of objects");
      return false;
    }
    if (Object.keys(obj).length !== 1) {
      cerr("Each object in the table must have only one key");
      return false;
    }
    tables.push(obj as Object);
  }
  for (const obj of tables) {
    //check to make sure that each key in the headers array is in the data array of obj
    const table = Object.values(obj)[0] as PrismaJson.TableData;
    const headers = table["headers"];
    const data = table["data"];
    for (const row of data) {
      // check to see if every header is in the row
      let rowKeys = Object.keys(row);
      for (const header of headers) {
        if (!rowKeys.includes(header)) {
          cerr("Header not found in data:", header);
          return false;
        }
      }
    }
    //check to make sure that each key in the data array is in the headers array
    for (const row of data) {
      let rowKeys = Object.keys(row);
      for (const key of rowKeys) {
        if (!headers.includes(key)) {
          cerr("Invalid Key not Found in headers:", key);
          return false;
        }
      }
    }
  }
  return true;
};

export default verifyTableIntegrity;
