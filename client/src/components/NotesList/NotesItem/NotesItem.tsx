import React, { FC } from "react"
import { INotes } from "../../../types/types"

interface NotesItemProps {
  note: INotes;
}

export const NotesItem: FC<NotesItemProps> = ({ note }) => {
  return (
    <div className='list-item'>
      <div className='lits-item__content'>
        <span>{note.title}</span>
        <button>X</button>
      </div>
    </div>
  )
}