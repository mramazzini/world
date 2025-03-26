import ConfirmButton from '@/components/UI/ConfirmButton';
import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import { useState } from 'react';

const md = new MarkdownIt();

const NoteEditor = ({
  note,
  updateNote,
  deleteNote,
}: {
  note: Note;
  updateNote: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [noteText, setNoteText] = useState(note.content);
  const getParsedHtml = (markdownText: string) => {
    const rawHtml = md.render(markdownText);
    return DOMPurify.sanitize(rawHtml);
  };
  return (
    <div className="bg-base-300 p-4 rounded-xl flex flex-col  w-full">
      <div className="flex justify-between mt-2 w-full mt-auto  ">
        <button
          onClick={() => {
            if (editing) {
              updateNote(note.id, noteText);
            }
            setEditing(!editing);
          }}
          className="btn btn-ghost border-gray-500 btn-sm   "
        >
          {editing ? 'Save Note' : 'Edit Note'}
        </button>
        <ConfirmButton
          onClick={() => {
            deleteNote(note.id);
          }}
          className="btn btn-error btn-sm"
        >
          Delete Note
        </ConfirmButton>
      </div>
      <div className="divider m-0"></div>
      {editing ? (
        <textarea
          className="w-full min-h-96 h-auto textarea textarea-bordered"
          defaultValue={noteText}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
        ></textarea>
      ) : (
        <div
          className="markdown-content  bg-base-200 p-4 rounded-xl"
          dangerouslySetInnerHTML={{
            __html: getParsedHtml(`${note.content}`),
          }}
        />
      )}{' '}
    </div>
  );
};

export default NoteEditor;
