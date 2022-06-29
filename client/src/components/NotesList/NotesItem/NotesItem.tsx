import React, { FC, useState } from "react"
import { INotes } from "../../../types/types"

import './NotesItem.scss'

interface NotesItemProps {
  note: INotes;
  deleteNote: (note: INotes) => void;
  editNote: (note: INotes) => void;
}

export const NotesItem: FC<NotesItemProps> = ({ note, deleteNote, editNote }) => {
  const [editEnable, setEditEnable] = useState<boolean>(true)
  // const [editNoteValue, setEditNoteValue] = useState<string>('')

  const handleEnabled = () => {
    setEditEnable(!editEnable)
  }

  // const handleEditNote = (e) => {
  //   console.log(e.target.value);

  //   editNote(e.target.value)
  // }


  return (
    <div className='list-item'>
      {/* <textarea className='list-item__content' name="text" id="text" onChange={handleEditNote} disabled={editEnable ? true : false}>{note.note}</textarea> */}
      <textarea className='list-item__content' name="text" id="text" onChange={() => editNote(note)} disabled={editEnable ? true : false}>{note.note}</textarea>
      <button className='content__button-edit' onClick={handleEnabled}>Edit</button>
      <button className='content__button-delete' onClick={() => deleteNote(note)}>X</button>
    </div>
  )
}