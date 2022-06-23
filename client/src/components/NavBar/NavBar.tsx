import React, { FC, useState } from 'react'
import { INotes } from '../../types/types'

interface NotesListProps {
    notes: INotes[];
    inputHandler: () => string;
    // inputHandler: () => React.ChangeEvent<HTMLInputElement>;
}

export const NavBar: FC<NotesListProps> = ({ notes, inputHandler }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [tags, setTags] = useState<string>('')


    const addNewNoteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Добавлено');
    }

    return (
        <div>
            <input value={inputValue} onChange={inputHandler} type="text" />
            <button onClick={addNewNoteHandler}>Add Note</button>
        </div>
    )
}
