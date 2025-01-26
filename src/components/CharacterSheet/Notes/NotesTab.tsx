'use client';
import { useState } from 'react';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import NoteEditor from './NoteEditor';
import { useAppDispatch } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { v4 } from 'uuid';
import NoteSelector from './NoteSelector';

const Notes = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const [selectedNoteId, setSelectedNote] = useState<string | null>(null);

  //Todo, make notes more advanced, with tabs and titles

  const notes = state?.notes;
  if (!state) return null;
  if (!notes) return null;

  const handleAddNote = () => {
    dispatch(
      setCharacterState({
        ...state,
        notes: [
          ...notes,
          {
            id: v4(),
            title: '',
            content: '',
          },
        ],
      })
    );
  };
  const handleDeleteNote = (id: string) => {
    dispatch(
      setCharacterState({
        ...state,
        notes: notes.filter((note) => note.id !== id),
      })
    );
    setSelectedNote(null);
  };

  const updateNote = (noteId: string, content: string) => {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          content,
        };
      }
      return note;
    });
    dispatch(
      setCharacterState({
        ...state,
        notes: newNotes,
      })
    );
  };

  const renameNote = (noteId: string, title: string) => {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          title,
        };
      }
      return note;
    });
    dispatch(
      setCharacterState({
        ...state,
        notes: newNotes,
      })
    );
  };

  return (
    <div className="flex flex-col w-full bg-base-200 p-4">
      <h2 className="font-bold">Notes</h2>
      <p>Write your notes here.</p>
      <p>
        Use{' '}
        <a
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
          className="link link-primary"
          rel="noreferrer"
        >
          Markdown
        </a>{' '}
        to format your text.
      </p>
      <p>
        Double click on a note to rename it. Click on a note to edit it. Press
        enter to save the new name.
      </p>

      <div className="divider"></div>
      <ul className="menu menu-horizontal bg-base-300">
        {notes.map((note, index) => (
          <NoteSelector
            key={note.id}
            note={note}
            renameNote={renameNote}
            isSelected={selectedNoteId === note.id}
            selectNote={(noteId) => setSelectedNote(noteId)}
          />
        ))}
        <li className="ml-2">
          <button
            className="bg-success text-success-content hover:bg-success/80 focus:bg-success focus:text-success-content"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </li>
      </ul>
      <div className="bg-base-300 mt-4">
        {selectedNoteId ? (
          <NoteEditor
            note={notes.find((note) => note.id === selectedNoteId)!}
            updateNote={updateNote}
            deleteNote={() => handleDeleteNote(selectedNoteId)}
          />
        ) : (
          <p>Select a note to edit or create a new note.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
