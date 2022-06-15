import React from 'react'

interface Props {
    note: string;
}

export const ListItem = ({note}: Props) => {
  return (
    <div className='list-item'>
        <div className='lits-item__content'>
            <span>{note}</span>
            <button>X</button>
        </div>
    </div>
    
  )
}
