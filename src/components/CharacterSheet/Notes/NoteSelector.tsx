import { useEffect, useRef, useState } from 'react';

interface NoteSelectorProps {
  note: Note;
  selectNote: (noteId: string) => void;
  isSelected: boolean;
  renameNote: (noteId: string, name: string) => void;
}

const NoteSelector = ({
  selectNote,
  note,
  isSelected,
  renameNote,
}: NoteSelectorProps) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [renaming, setRenaming] = useState<string>(note.title);
  const [isRenaming, setIsRenaming] = useState(false);

  useEffect(() => {
    if (isRenaming && isSelected) {
      inputEl.current?.focus();

      const handleClickOutside = (event: MouseEvent) => {
        if (
          inputEl.current &&
          !inputEl.current.contains(event.target as Node)
        ) {
          setIsRenaming(false);
          renameNote(note.id, renaming);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isRenaming, isSelected, note.id, renaming, renameNote]);

  return (
    <li>
      {isRenaming && isSelected ? (
        <input
          ref={inputEl}
          type="text"
          value={renaming}
          onChange={(e) => {
            setRenaming(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              renameNote(note.id, renaming);
              setIsRenaming(false);
            }
          }}
        />
      ) : (
        <button
          className={isSelected ? 'active' : ''}
          onClick={() => {
            if (!isSelected) {
              selectNote(note.id);
            } else {
              setIsRenaming(true);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsRenaming(true);
            }
          }}
        >
          {note.title || 'Untitled'}
        </button>
      )}
    </li>
  );
};

export default NoteSelector;
