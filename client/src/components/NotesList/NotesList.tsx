import React, { FC } from 'react'
import { INotes } from '../../types/types';
import { NotesItem } from './NotesItem/NotesItem';

interface NotesListProps {
  notes: INotes[],
  deleteNote: (note: INotes) => void;
}

export const NotesList: FC<NotesListProps> = ({ notes, deleteNote }) => {

  return (
    <div className="List">
      {notes.map(note =>
        <NotesItem key={note.id} note={note} deleteNote={deleteNote} />
      )}
    </div>
  )
}
