import React, { FC } from 'react'
import { INotes } from '../../types/types';
import { NotesItem } from './NotesItem/NotesItem';

import './NotesList.scss'

interface NotesListProps {
  notes: INotes[],
  deleteNote: (note: INotes) => void;
  editNote: (note: INotes) => void;
}

export const NotesList: FC<NotesListProps> = ({ notes, deleteNote, editNote }) => {

  return (
    <div className="notes-list">
      {notes.map(note =>
        <NotesItem key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />
      )}
    </div>
  )
}
