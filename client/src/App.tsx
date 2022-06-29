import React, { FC, useState } from 'react';
import { INotes } from './types/types';
import { NotesList } from './components/NotesList/NotesList';
import { NavBar } from './components/NavBar/NavBar';
// import axios from 'axios';

import './reset.scss';
import './App.scss';

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

  const editNote = (selectedNote: INotes): void => {
    console.log('selectedNote.id', selectedNote.id);
    console.log('selectedNote.note', selectedNote.note);

    const newNotes = notes.map((item) => {
      const { id, note } = item;
      console.log('id', id);
      console.log('note', note);

      return {
        ...item,
        note: id === selectedNote.id ? selectedNote.note : note
      };
    });
    setNotes(newNotes);
  }

  console.log(notes);

  return (
    <div className='App'>
      <div className='header'>
        <NavBar notes={notes} addNewNote={addNewNote} />
        <NotesList notes={notes} deleteNote={deleteNote} editNote={editNote} />
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
