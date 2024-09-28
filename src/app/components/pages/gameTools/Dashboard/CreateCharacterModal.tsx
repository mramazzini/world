"use client";
import { DBMetadata } from "@/lib/utils/types/metadata";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Alignment } from "@prisma/client";
import { alignmentToText } from "@/app/components/Utility/alignmentToText";
import SidebarMetaSelector from "./SidebarMetaSelector";
import { getClassMetadata } from "@/lib/actions/db/class/read.actions";
import { getSpeciesMetadata } from "@/lib/actions/db/race/get.actions";
import {
  getVariantMetadata,
  getVariantMetadataByRace,
} from "@/lib/actions/db/subrace/read.actions";
import { getBackgroundsMetadata } from "@/lib/actions/db/background/read.actions";
import { createCharacter } from "@/lib/actions/db/character/create.actions";
import { useRouter } from "next/navigation";

const CreateCharacterModal = () => {
  const router = useRouter();
  const [sideBarMetadata, setSideBarMetadata] = useState<DBMetadata[]>([]);
  const [sideBarModel, setSideBarModel] = useState<
    "class" | "species" | "variant" | "background" | null
  >(null);
  const [variantsAvailable, setVariantsAvailable] = useState(false);

  const [newChar, setNewChar] = useState<{
    name: string;
    alignment: Alignment;
    class?: DBMetadata;
    species?: DBMetadata;
    variant?: DBMetadata;
    background?: DBMetadata;
  }>({
    name: "",
    alignment: Alignment.TRUE_NEUTRAL,
  });

  const id = v4();

  useEffect(() => {
    const fetchMetadata = async () => {
      let res: DBMetadata[] = [];
      switch (sideBarModel) {
        case "class":
          res = await getClassMetadata();
          break;
        case "species":
          setNewChar((prev) => ({ ...prev, variant: undefined }));
          res = await getSpeciesMetadata();
          break;
        case "variant":
          if (!newChar.species) return setSideBarModel(null);
          res = await getVariantMetadataByRace(newChar.species.id);
          break;
        case "background":
          res = await getBackgroundsMetadata();
          break;
        default:
          break;
      }
      setSideBarMetadata(res);
    };
    if (sideBarModel) fetchMetadata();
  }, [sideBarModel]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("asd", newChar);
    if (
      !newChar.class ||
      !newChar.species ||
      !newChar.background ||
      newChar.name.length == 0
    )
      return;
    const res = await createCharacter({
      name: newChar.name,
      alignment: newChar.alignment,
      classId: newChar.class?.id,
      raceId: newChar.species?.id,
      backgroundId: newChar.background?.id,
      userId: 1,
      variantId: newChar.variant?.id,
    });

    router.push(`/dashboard/${res}`);
  };

  return (
    <>
      <button
        onClick={() => {
          const el = document.getElementById(id) as HTMLDialogElement;
          el.showModal();
        }}
        className="btn btn-ghost border-gray-500"
      >
        Create a Character -&gt;
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box flex flex-col items-center ">
          <h3 className="font-bold text-lg">Character Creator</h3>

          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <label className="label">
              Character Name
              <input
                type="text"
                className="input input-primary input-bordered  w-full max-w-xs"
                placeholder="Character Name"
                onChange={(e) =>
                  setNewChar((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </label>
            <label className="label">
              Alignment
              <select
                className="select select-bordered select-primary  w-full max-w-xs"
                defaultValue={Alignment.TRUE_NEUTRAL}
                onChange={(e) =>
                  setNewChar((prev) => ({
                    ...prev,
                    alignment: e.target.value as Alignment,
                  }))
                }
              >
                {Object.values(Alignment).map((alignment) => (
                  <option
                    key={alignment}
                    value={alignment}
                    className="capitalize"
                  >
                    {alignmentToText(alignment)}
                  </option>
                ))}
              </select>
            </label>
            <label className="label">
              Class
              <button
                className="btn btn-ghost border-primary w-full max-w-xs"
                onClick={async (e) => {
                  e.preventDefault();
                  setSideBarModel("class");
                }}
              >
                {newChar.class?.name.toCapitalCase() || "Choose Class"}
              </button>
            </label>
            <label className="label">
              Species
              <button
                className="btn btn-ghost border-primary w-full max-w-xs"
                onClick={async (e) => {
                  e.preventDefault();
                  setSideBarModel("species");
                }}
              >
                {newChar.species?.name.toCapitalCase() || "Choose Species"}
              </button>
            </label>
            {variantsAvailable && (
              <label className="label">
                Variant
                <button
                  className="btn btn-ghost border-primary w-full max-w-xs"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (!newChar.species) return setSideBarModel(null);
                    setSideBarModel("variant");
                  }}
                >
                  {newChar.variant?.name.toCapitalCase() || "Choose Variant"}
                </button>
              </label>
            )}
            <label className="label">
              Background
              <button
                className="btn btn-ghost border-primary w-full max-w-xs"
                onClick={async (e) => {
                  e.preventDefault();
                  setSideBarModel("background");
                }}
              >
                {newChar.background?.name.toCapitalCase() ||
                  "Choose Background"}
              </button>
            </label>

            <SidebarMetaSelector
              metadata={sideBarMetadata}
              model={sideBarModel || ""}
              show={sideBarModel !== null}
              loading={sideBarMetadata.length === 0}
              setSelected={async (metadata) => {
                switch (sideBarModel) {
                  case "class":
                    setNewChar((prev) => ({ ...prev, class: metadata }));
                    break;
                  case "species":
                    setNewChar((prev) => ({ ...prev, species: metadata }));
                    const available = await getVariantMetadataByRace(
                      metadata.id
                    );
                    setVariantsAvailable(available.length > 0);

                    break;
                  case "variant":
                    setNewChar((prev) => ({ ...prev, variant: metadata }));
                    break;
                  case "background":
                    setNewChar((prev) => ({ ...prev, background: metadata }));
                    break;
                  default:
                    break;
                }
                setSideBarModel(null);
              }}
            />
            <div className="mt-2 w-full">
              <div className="flex justify-end gap-4">
                <button
                  className="btn btn-error"
                  onClick={(e) => {
                    e.preventDefault();
                    const modal = document.getElementById(
                      id
                    ) as HTMLDialogElement;
                    setSideBarModel(null);
                    modal.close();
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateCharacterModal;
