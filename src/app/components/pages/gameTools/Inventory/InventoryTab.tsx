import { CharacterInfo } from "@/lib/types";
import LoadoutUI from "./LoadoutUI";
import ItemsUI from "./ItemsUI";

interface Props {
  character: CharacterInfo;
}
const InventoryTab = ({ character }: Props) => {
  return (
    character &&
    character.state && (
      <div className="flex flex-row w-full">
        {/* loadout */}
        <div className="w-1/2 flex flex-col">
          <LoadoutUI character={character} />
        </div>
        <div className="divider divider-primary divider-horizontal"></div>
        {/* inventory */}
        <div className="w-1/2 flex flex-col">
          <ItemsUI character={character} />
        </div>
      </div>
    )
  );
};

export default InventoryTab;
