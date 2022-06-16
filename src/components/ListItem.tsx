import React from 'react'
import { INote } from '../Interface'

interface Props {
  note: INote;
}

export const ListItem = ({ note }: Props) => {
  return (
    <div className='list-item'>
      <div className='lits-item__content'>
        <span>{note.note}</span>
        <button>X</button>
      </div>
    </div>

  )
}
