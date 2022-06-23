import React, { FC, useState } from "react"
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
        <button onClick={() => deleteNote(note)}>X</button>
      </div>
    </div>
  )
}