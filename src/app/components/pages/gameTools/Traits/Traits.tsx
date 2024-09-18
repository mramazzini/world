"use client";
import Info from "@/app/components/UI/Info";
import JsonTable from "@/app/components/Utility/JsonTable";
import Tooltip from "@/app/components/Utility/Tooltip";
import { MarkdownItem } from "@/lib/types";
import { Background } from "@prisma/client";
import DOMPurify from "dompurify";
import markdownIt from "markdown-it";
import { useState } from "react";
interface Props {
  state: PrismaJson.CharacterState;
  setState: (character: PrismaJson.CharacterState) => void;
  background: Background | null;
}
const md = markdownIt();

const Trait = ({
  note,
  index,
  updateNote,
  buttonText,
}: {
  note: MarkdownItem;
  index: number;
  updateNote: (note: MarkdownItem) => void;
  buttonText: string;
}) => {
  const [editing, setEditing] = useState(false);
  const [noteText, setNoteText] = useState(note);
  const getParsedHtml = (markdownText: string) => {
    const rawHtml = md.render(markdownText);
    return DOMPurify.sanitize(rawHtml);
  };
  return (
    <div className="bg-base-300 p-4 rounded-xl flex flex-col min-h-96 w-full">
      {editing ? (
        <textarea
          className="w-full min-h-96 textarea"
          defaultValue={noteText}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
        ></textarea>
      ) : (
        <div
          className="markdown-content "
          dangerouslySetInnerHTML={{
            __html: getParsedHtml(`${note}`),
          }}
        />
      )}{" "}
      <div className="divider m-0"></div>
      <div className="flex justify-between mt-2 w-full ">
        <div></div>
        <button
          onClick={() => {
            if (editing) {
              updateNote(noteText);
            }
            setEditing(!editing);
          }}
          className="btn btn-ghost border-gray-500 btn-sm  w-full"
        >
          {editing ? "Save " + buttonText : "Edit " + buttonText}
        </button>
      </div>
    </div>
  );
};

const ListEditor = ({
  data,
  setData,
  buttonText,
  title,
  tooltip,
}: {
  data: string[];
  setData: (data: string[]) => void;
  buttonText: string;
  title: string;
  tooltip?: JSX.Element;
}) => {
  const [editing, setEditing] = useState(false);
  const [listText, setListText] = useState(data.join("\n"));
  const handleDelete = (index: number) => {
    const newList = data.filter((_, i) => i !== index);
    setData(newList);
  };
  const handleCreate = () => {
    const newList = [...data, ""];
    setData(newList);
  };
  return (
    <div className="bg-base-300 p-4 rounded-xl flex flex-col min-h-96 w-full">
      <h2 className="font-bold flex items-center">
        {title} <span className="ml-2 ">{tooltip}</span>
      </h2>
      <div className="divider m-0"></div>
      {editing ? (
        data.map((item, index) => (
          <div className="join">
            <input
              className="input input-bordered w-full mb-2 join-item"
              key={index}
              defaultValue={item}
              onChange={(e) => {
                const newListText = listText.split("\n");
                newListText[index] = e.target.value;
                setListText(newListText.join("\n"));
              }}
            ></input>
            <button
              className="btn btn-error  join-item"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <ul className="list-disc ml-4">
          {data.length > 0 ? (
            data.map((item, index) => (
              <li key={index}>
                {item.length > 0
                  ? item
                  : `Empty ${buttonText} - Edit this to display your ${buttonText}`}
              </li>
            ))
          ) : (
            <li>
              No {buttonText} - Edit this to display your {buttonText}
            </li>
          )}
        </ul>
      )}
      {editing && (
        <button
          onClick={() => handleCreate()}
          className="btn btn-success btn-sm mt-2"
        >
          + Add +
        </button>
      )}
      <div className="divider m-0"></div>

      <div className="flex justify-between mt-2 w-full mt-auto">
        <div></div>
        <button
          onClick={() => {
            if (editing) {
              setData(listText.split("\n"));
            }
            setEditing(!editing);
          }}
          className="btn btn-ghost border-gray-500 btn-sm  w-full "
        >
          {editing ? "Save " + buttonText : "Edit " + buttonText}
        </button>
      </div>
    </div>
  );
};

const Traits = ({ state, setState, background }: Props) => {
  const traitLength = background?.traits?.length || 0;
  const idealsLength = background?.ideals?.length || 0;
  const bondsLength = background?.bonds?.length || 0;
  const flawsLength = background?.flaws?.length || 0;
  return (
    <div className="flex flex-col w-full bg-base-200 p-4">
      <h2 className="font-bold">Personality Traits</h2>
      <p>Write down your character's traits, ideals, bonds, and flaws here.</p>
      <p>
        Use{" "}
        <a
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
          className="link link-primary"
        >
          Markdown
        </a>{" "}
        to format your text.
      </p>

      <div className="divider m-0"></div>
      <h2 className="font-bold w-full text-center">About </h2>
      <div className="divider m-0"></div>
      <Trait
        buttonText="Biography"
        note={state.biography}
        index={0}
        updateNote={(note) => {
          setState({ ...state, biography: note });
        }}
      />
      <div className="divider m-0"></div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ListEditor
          title="Personality Traits"
          buttonText="Personality Traits"
          data={state.personalityTraits}
          setData={(traits) => {
            setState({ ...state, personalityTraits: traits });
          }}
          tooltip={
            <Tooltip
              title="Personality Traits"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        "": {
                          headers: [
                            `d${traitLength.toString()}`,
                            "Personality Trait",
                          ],
                          data:
                            background?.traits.map((trait, index) => {
                              return {
                                [`d${traitLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                "Personality Trait": trait || "",
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Personality traits are small quirks or habits that define your
              character's personality. They can be anything from "I'm always
              polite and respectful" to "I can't resist a pretty face."
            </Tooltip>
          }
        />
        <ListEditor
          title="Ideals"
          buttonText="Ideals"
          data={state.ideals}
          setData={(ideals) => {
            setState({ ...state, ideals });
          }}
          tooltip={
            <Tooltip
              title="Ideals"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        "": {
                          headers: [`d${idealsLength.toString()}`, "Ideal"],
                          data:
                            background?.ideals.map((ideal, index) => {
                              return {
                                [`d${idealsLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                Ideal: ideal || "",
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Ideals are beliefs that drive your character's actions. They can
              be anything from "Respect" to "Independence."
            </Tooltip>
          }
        />
        <ListEditor
          title="Bonds"
          buttonText="Bonds"
          data={state.bonds}
          setData={(bonds) => {
            setState({ ...state, bonds });
          }}
          tooltip={
            <Tooltip
              title="Bonds"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        "": {
                          headers: [`d${bondsLength.toString()}`, "Bond"],
                          data:
                            background?.bonds.map((bond, index) => {
                              return {
                                [`d${bondsLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                Bond: bond || "",
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Bonds are connections to people, places, or things that are
              important to your character. They can be anything from "My family"
              to "My homeland."
            </Tooltip>
          }
        />
        <ListEditor
          title="Flaws"
          buttonText="Flaws"
          data={state.flaws}
          setData={(flaws) => {
            setState({ ...state, flaws });
          }}
          tooltip={
            <Tooltip
              title="Flaws"
              element={
                <span className="badge badge-info flex items-center">?</span>
              }
              additionalContent={
                <>
                  <div className="divider m-0"></div>
                  <JsonTable
                    json={[
                      {
                        "": {
                          headers: [`d${flawsLength.toString()}`, "Flaw"],
                          data:
                            background?.flaws.map((flaw, index) => {
                              return {
                                [`d${flawsLength.toString()}`]: (
                                  index + 1
                                ).toString(),
                                Flaw: flaw || "",
                              };
                            }) || [],
                        },
                      },
                    ]}
                  />
                </>
              }
            >
              Flaws are weaknesses or imperfections that your character has.
              They can be anything from "I have a weakness for the vices of the
              city" to "I'm always in debt."
            </Tooltip>
          }
        />
      </div>
    </div>
  );
};

export default Traits;
