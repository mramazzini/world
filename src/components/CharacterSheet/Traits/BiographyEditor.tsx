import { MarkdownItem } from '@/lib/types/types';
import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import { useState } from 'react';
const md = MarkdownIt();

const BiographyEditor = ({
  note,
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
      )}{' '}
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
          {editing ? 'Save ' + buttonText : 'Edit ' + buttonText}
        </button>
      </div>
    </div>
  );
};

export default BiographyEditor;
