import React, { FC, useState } from "react"
import { INotes } from "../../../types/types"

interface NotesItemProps {
  note: INotes;
}

export const NotesItem: FC<NotesItemProps> = ({ note }) => {

  const deleteHandler = (e: React.MouseEvent) => {
    console.log('deleteHandler', e.target);
  }

  return (
    <div className='list-item'>
      <div className='lits-item__content'>
        <span>{note.note}</span>
        <button onClick={deleteHandler}>X</button>
      </div>
    </div>
  )
}