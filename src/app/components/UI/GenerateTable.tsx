import { useRouter } from "next/navigation";

//function to generate a single table
const GenerateTable = ({
  data,
  colSizes,
  links,
}: {
  data: PrismaJson.Table;
  colSizes?: number[] | undefined;
  links?: string[] | undefined;
}) => {
  const router = useRouter();
  const key = Object.keys(data)[0];
  const tableData = data[key];
  const tableHeader = tableData["headers"];
  const tableBody = tableData["data"];

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
            <tr
              key={index}
              className={`${links ? "hover cursor-pointer" : ""}`}
              onClick={(e) => {
                e.preventDefault();

                if (links) {
                  const link = links[index];
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
                  className={`${links && index === 0 ? "text-blue-500" : ""}`}
                >
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

export default GenerateTable;
