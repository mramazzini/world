// This is only required if the subclass is a spellcaster, and thus needs a spell slot table

import { SpellLevels } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";
import numPlace from "@/lib/utils/numPlace";
import { CasterType, CustomField, SubClass } from "@prisma/client";

interface Props {
  subClass: SubClass;
  casterType: CasterType;
  customFields: CustomField[];
  subClassLevel: number;
}

const SubClassTable: React.FC<Props> = ({
  subClass,
  casterType,
  customFields,
  subClassLevel,
}) => {
  return (
    <table className="table table-zebra sm:table-xs md:table-sm lg:table-md my-4 table-pin-rows max-w-[1800px]">
      <thead>
        <tr>
          <th className="text-left bg-black/20 w-[5%]">Level</th>
          {customFields.map((field, index) => (
            <th className="text-left bg-black/20 " key={index}>
              {field.name}
            </th>
          ))}

          {casterType &&
            subClass.spellCaster &&
            numberArray(1, 9).map((num) => (
              <th
                className="text-left bg-black/20 "
                style={{
                  padding: "0.5rem",
                  width: "2rem",
                }}
                key={num}
              >
                {numPlace(num)}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {numberArray(subClassLevel, 20).map((num) => {
          return (
            <tr key={num}>
              <th>{num}</th>
              {customFields.map((field, index) => {
                //get the key "level1" "level2" etc
                const key = `level${num}` as SpellLevels;
                return <td key={index}>{field[key] ? field[key] : "-"}</td>;
              })}
              {casterType &&
                subClass.spellCaster &&
                numberArray(0, 8).map((spellSlotLevel, index) => {
                  //get the key "level1" "level2" etc
                  const key = `level${num}` as SpellLevels;

                  return (
                    <td key={index}>
                      {casterType[key][spellSlotLevel] > 0
                        ? casterType[key][spellSlotLevel]
                        : "-"}
                    </td>
                  );
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SubClassTable;
