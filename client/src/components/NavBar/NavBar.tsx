import React, { FC, useState } from 'react'
import { INotes } from '../../types/types'

interface NotesListProps {
    notes: INotes[];
    addNewNote: (note: INotes) => void;
}

export const NavBar: FC<NotesListProps> = ({ notes, addNewNote }) => {
    const [inputValue, setInputValue] = useState<string>('') 

    const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }    

    const addNewNoteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        addNewNote({
            id: Date.now(),
            note: inputValue,
            tag: '#fffff'
        })
    }

    return (
        <div>
            <input onChange={inputValueHandler} type="text" />
            <button onClick={addNewNoteHandler}>Add Note</button>
        </div>
    )
}


    // addNewNote: (note: React.MouseEvent<HTMLButtonElement>) => void;

        // const {name, important, active = true} = no;

        // addNewNote({
        //     id: Date.now(),
        //     title: title
        // });