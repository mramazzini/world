import P from "@/app/components/Utility/FormatAndSanitize";
import { CharacterInfo } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";

interface Props {
  character: CharacterInfo;
}

const GridItem = ({ data }: { data?: PrismaJson.QuantityItem }) => {
  return data ? (
    <div className="w-24 h-12 bg-neutral p-2 rounded-box flex flex-col items-center justify-center">
      <span className="text-xs text-center">
        {data.quantity} <P>{`^${data.item}{}^`}</P>
      </span>
    </div>
  ) : (
    <div className="w-24 h-12 bg-neutral p-2 rounded-box flex items-center justify-center">
      <div className="w-6 h-6 bg-base-300 rounded-box flex items-center justify-center">
        <div className="w-4 h-4 bg-neutral rounded-box"></div>
      </div>
    </div>
  );
};

const ItemsUI = ({ character }: Props) => {
  if (!character.state) return null;
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {character.state.inventory.map((item, index) => (
        <GridItem key={index} data={item} />
      ))}
      {numberArray(1, 56 - character.state.inventory.length).map((index) => (
        <GridItem key={index} />
      ))}
    </div>
  );
};

export default ItemsUI;
