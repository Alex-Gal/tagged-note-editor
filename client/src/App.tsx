import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { NotesList } from './components/NotesList/NotesList';
import { INotes } from './types/types';
import axios from 'axios';

import './App.css';
import { NavBar } from './components/NavBar/NavBar';

const App: FC = () => {
  const [notes, setNotes] = useState<INotes[]>([])
  
  const addNewNote = (newNote: INotes): void => {
    const newNotes = [...notes];
    newNotes.push(newNote);
    setNotes(newNotes);
  };

  const deleteNote = (selectedNote: INotes): void => {
    const selectedId = selectedNote.id;
    const newNotes = notes.filter((note) => note.id !== selectedId);
    setNotes(newNotes);
  }

  return (
    <div>
      <div>
        <NavBar notes={notes} addNewNote={addNewNote} />
        <NotesList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;

  // useEffect(() => {
  //   fetchNotes()
  // }, [])

  // async function fetchNotes() {
  //   try {
  //     const response = await axios.get<INotes[]>('https://jsonplaceholder.typicode.com/todos')
  //     setNotes(response.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
