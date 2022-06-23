import React, { FC } from "react"
import { INotes } from "../../../types/types"

interface NotesItemProps {
  note: INotes;
  deleteNote: (note: INotes) => void;
}

export const NotesItem: FC<NotesItemProps> = ({ note, deleteNote }) => {

  return (
    <div className='list-item'>
      <div className='lits-item__content'>
        <span>{note.note}</span>
        <span>{note.id}</span> 
        <span style={{marginLeft:'15px'}}>{note.tag}</span> 
        <button onClick={() => deleteNote(note)}>X</button>
      </div>
    </div>
  )
}