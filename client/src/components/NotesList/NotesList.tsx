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


{/* <div className="header">
<div className="inputContainer">
  <input
    type="text"
    placeholder='Введите текст'
    value={notesList.note}
    name='note'
    onChange={handleChange} />
  <input
    type="text"
    placeholder='Поиск по тегу'
    value={notesList.tag}
    name='filter'
    onChange={handleChange} />
</div>
<button onClick={addNote}>Добавить</button>
</div>
<div className="notesList">
{notesList.map((note: string, key: number) => {
  return <ListItem key={key} note={note} />
})}
</div> */}