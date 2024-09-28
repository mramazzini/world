"use client";
import { MarkdownItem } from "@/lib/utils/types/types";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import { useState } from "react";
import Image from "next/image";
interface Props {
  notes: MarkdownItem[];
  updateNotes: (notes: MarkdownItem[]) => void;
}
const md = new MarkdownIt();

const Note = ({
  note,
  index,
  updateNote,
}: {
  note: MarkdownItem;
  index: number;
  updateNote: (note: MarkdownItem) => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [noteText, setNoteText] = useState(note);
  const getParsedHtml = (markdownText: string) => {
    const rawHtml = md.render(markdownText);
    return DOMPurify.sanitize(rawHtml);
  };
  return (
    <div className="bg-base-200 p-4 rounded-xl flex flex-col min-h-96 w-full">
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
          className="markdown-content h-96 overflow-y-scroll"
          dangerouslySetInnerHTML={{
            __html: getParsedHtml(`${note}`),
          }}
        />
      )}{" "}
      <div className="divider m-0"></div>
      <div className="flex justify-between mt-2 w-full mt-auto ">
        <div></div>
        <button
          onClick={() => {
            if (editing) {
              updateNote(noteText);
            }
            setEditing(!editing);
          }}
          className="btn btn-ghost border-gray-500 btn-sm  w-full "
        >
          {editing ? "Save Note" : "Edit Note"}
        </button>
      </div>
    </div>
  );
};

const Notes = ({ updateNotes, notes }: Props) => {
  const handleAddNote = () => {
    updateNotes([...notes, "# New Note"]);
  };
  const handleDeleteNote = (index: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    updateNotes(newNotes);
  };
  return (
    <div className="flex flex-col w-full bg-base-200 p-4">
      <h2 className="font-bold">Notes</h2>
      <p>Write your notes here.</p>
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

      <div className="divider"></div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className=" indicator w-full bg-base-300 p-4 rounded-xl"
          >
            <button
              className="indicator-item hover:bg-error/80 bg-error btn-xs rounded-full h-6 w-6 p-0 flex items-center justify-center"
              onClick={() => handleDeleteNote(index)}
            >
              <Image src="/images/exit.svg" width={12} height={12} alt="x" />
            </button>
            <Note
              note={note}
              index={index}
              updateNote={(newNote) => {
                const newNotes = [...notes];
                newNotes[index] = newNote;
                updateNotes(newNotes);
              }}
            />
          </div>
        ))}
        <button
          onClick={handleAddNote}
          className="bg-base-300 p-4 rounded-xl flex flex-col min-h-96"
        >
          <div className="flex items-center justify-center h-full btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Notes;
