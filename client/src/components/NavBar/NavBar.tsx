import React, { FC, useState } from 'react'
import { INotes } from '../../types/types'

import './NavBar.scss'

interface NotesListProps {
    notes: INotes[];
    addNewNote: (note: INotes) => void;
}

export const NavBar: FC<NotesListProps> = ({ notes, addNewNote }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const [count, setCount] = useState<number>(1);
    const [tagArray, setTagArray] = useState<Array<string>>([]);
    const [uniqueTagArray, setUniqueTagArray] = useState<Array<string>>([]);


    const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const addNewNoteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const tags = uniqueTagArray.join(' ')
        addNewNote({
            id: Date.now(),
            note: inputValue,
            tag: tags
        })
    }

    const tag = (e: string) => {
        if (e[e.length - count] === '#') {
            setCount(count + 1);
            if (e[e.length - 1] === ' ') {
                setTagArray([...tagArray, e.slice(e.length - count, e.length - 1)])
                setCount(1);
            }
        }
        let uniqueArray = tagArray.filter(function (item, pos) {
            return tagArray.indexOf(item) === pos;
        })

        setUniqueTagArray(uniqueArray)
    }

    return (
        <div className='nav-bar'>
            <input className='nav-bar__input' onChange={(e) => {
                inputValueHandler(e);
                tag(e.target.value);
            }}
                type="text" />
            <button className='nav-bar__btn' onClick={addNewNoteHandler}>Add Note</button>
        </div>
    )
}
