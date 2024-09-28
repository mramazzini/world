import { DBMetadata } from "@/lib/utils/types/metadata";
import { v4 } from "uuid";

interface Props {
  model: string;
  loading: boolean;
  metadata: DBMetadata[];
  show: boolean;
  setSelected: (selected: DBMetadata) => void;
}

const SidebarMetaSelector = ({
  model,
  metadata,
  show,
  loading,
  setSelected,
}: Props) => {
  return (
    <div className={`${show ? "" : "hidden"}`}>
      <h3>Select </h3>
      <div className="divider divider-accent"></div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        metadata.map((meta) => (
          <button
            key={v4()}
            onClick={() => setSelected(meta)}
            className="btn btn-secondary"
          >
            {meta.name}
          </button>
        ))
      )}
    </div>
  );
};

export default SidebarMetaSelector;
