import JsonTable from "../Utility/JsonTable";

interface Props {
  data: (string | number)[];
  resultString?: string;
  title?: string;
}
const DieTable = ({ data, resultString, title }: Props) => {
  const table: PrismaJson.Table[] = [
    {
      [`${title || ""}`]: {
        headers: [`d${data.length}`, resultString || "Result"],
        data: data.map((str, index) => {
          return {
            [`d${data.length}`]: (index + 1).toString(),
            [resultString || "Result"]: str.toString(),
          };
        }),
      },
    },
  ];
  return <JsonTable json={table} />;
};

export default DieTable;
