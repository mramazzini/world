"use client";
import Tooltip from "@/app/components/Utility/Tooltip";
import { CharacterInfo, Time } from "@/lib/utils/types/types";
import Image from "next/image";

interface Props {
  character: CharacterInfo;
  setCharacter: (character: CharacterInfo) => void;
}

const Resources = ({ character, setCharacter }: Props) => {
  const createResource = () => {
    if (!character.state || !character.state.customResources) return;
    const newResources = [...character.state.customResources];
    newResources.push({
      name: "",
      current: 1,
      max: 1,
      description: "",
      resetType: { quantity: 0, unit: Time.day },
    });
    setCharacter({
      ...character,
      state: {
        ...character.state,
        customResources: newResources,
      },
    });
  };
  if (!character.state) return null;
  return character.state.customResources ? (
    <>
      <div className="flex flex-col  overflow-scroll max-h-64">
        <div className="flex flex-wrap justify-center">
          {character.state.customResources.map((resource, index) => (
            <div
              key={index}
              className="col-span-4 flex flex-row items-center join m-1 w-full"
            >
              {/* <Tooltip
                title={resource.name}
                element={
                  <span className="join-item badge font-bold badge-lg badge-info text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    i
                  </span>
                }
              >
                {resource.description}
              </Tooltip> */}
              <p className="join-item badge font-bold badge-lg w-full text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                {resource.name.length == 0 ? "Resource" : ""}
                {resource.name.length <= 18
                  ? resource.name
                  : resource.name.slice(0, 15) + "..."}
                : {resource.current}/{resource.max}
              </p>
              <button
                className="join-item btn btn-error btn-xs"
                onClick={() => {
                  if (!character.state || !character.state.customResources)
                    return;
                  if (character.state.customResources[index].current <= 0)
                    return;
                  const newResources = [...character.state.customResources];
                  newResources[index].current -= 1;
                  setCharacter({
                    ...character,
                    state: {
                      ...character.state,
                      customResources: newResources,
                    },
                  });
                }}
              >
                -
              </button>

              <button
                className="join-item btn btn-success btn-xs"
                onClick={() => {
                  if (!character.state || !character.state.customResources)
                    return;
                  if (
                    character.state.customResources[index].current ===
                    character.state.customResources[index].max
                  )
                    return;
                  const newResources = [...character.state.customResources];
                  newResources[index].current += 1;
                  setCharacter({
                    ...character,
                    state: {
                      ...character.state,
                      customResources: newResources,
                    },
                  });
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="divider m-0"></div>
      {/* create or edit resources */}
      <button
        className="btn btn-ghost border-gray-500 btn-sm w-full"
        onClick={() =>
          (
            document.getElementById("resource_modal") as HTMLDialogElement
          ).showModal()
        }
      >
        Edit Resources
      </button>
      <dialog id="resource_modal" className="modal">
        <div className="modal-box p-4 w-auto max-w-full">
          <h3 className="font-bold text-lg">
            Adjust your Custom Resources Here.
          </h3>
          <div className="divider m-0"></div>
          {/* No form, just automatically update it. */}
          <table className="table w-full">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Max</th>
                <th></th>
              </tr>
              {character.state.customResources.map((resource, index) => (
                <tr key={index}>
                  <td>
                    <input
                      disabled={resource.name === "Hit Dice"}
                      type="text"
                      value={resource.name}
                      placeholder="Ex. Charges, Ki Points, etc."
                      className="input input-bordered input-sm"
                      onChange={(e) => {
                        if (
                          !character.state ||
                          !character.state.customResources
                        )
                          return;
                        const newResources = [
                          ...character.state.customResources,
                        ];
                        newResources[index].name = e.target.value;
                        setCharacter({
                          ...character,
                          state: {
                            ...character.state,
                            customResources: newResources,
                          },
                        });
                      }}
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      disabled={resource.name === "Hit Dice"}
                      value={resource.max}
                      className="input input-bordered input-sm"
                      onChange={(e) => {
                        if (
                          !character.state ||
                          !character.state.customResources
                        )
                          return;
                        const newResources = [
                          ...character.state.customResources,
                        ];
                        newResources[index].max = parseInt(e.target.value);
                        newResources[index].current = parseInt(e.target.value);
                        setCharacter({
                          ...character,
                          state: {
                            ...character.state,
                            customResources: newResources,
                          },
                        });
                      }}
                    />
                  </td>
                  <td>
                    {/* remove */}
                    <button
                      className="btn btn-error btn-sm"
                      disabled={resource.name === "Hit Dice"}
                      onClick={() => {
                        if (
                          !character.state ||
                          !character.state.customResources
                        )
                          return;
                        const newResources = [
                          ...character.state.customResources,
                        ];
                        newResources.splice(index, 1);
                        setCharacter({
                          ...character,
                          state: {
                            ...character.state,
                            customResources: newResources,
                          },
                        });
                      }}
                    >
                      <Image
                        src="/images/exit.svg"
                        alt="delete"
                        width={12}
                        height={12}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => createResource()}
                  >
                    Add Resource
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  ) : (
    ""
  );
};

export default Resources;
