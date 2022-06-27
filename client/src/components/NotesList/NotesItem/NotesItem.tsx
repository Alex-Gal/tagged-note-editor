import React, { FC } from "react"
import { INotes } from "../../../types/types"

import './NotesItem.scss'

interface NotesItemProps {
  note: INotes;
  deleteNote: (note: INotes) => void;
}

export const NotesItem: FC<NotesItemProps> = ({ note, deleteNote }) => {

  return (
    <div className='list-item'>
      <div className='lits-item__content'>
        <span className='content__note'>Text: {note.note} </span>
        <span className='content__id'>Id: {note.id} </span>
        <span className='content__tag'>Tag: {note.tag}</span>
      </div>
      <button className='content__button' onClick={() => deleteNote(note)}>X</button>
    </div>
  )
}