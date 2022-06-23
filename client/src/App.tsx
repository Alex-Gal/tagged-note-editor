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

  return (
    <div>
      <div>
        <NavBar notes={notes} addNewNote={addNewNote} />
        <NotesList notes={notes} />
      </div>
    </div>
  );
}

export default App;



  //React.MouseEvent<HTMLButtonElement>

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

  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, arr: INotes): void => {
  //   const newArray = [...notes, arr]
  //   setNotes(newArray)
  // }

  // console.log(notes);
  

// const App: FC = () => {
//   const [note, setNote] = useState<INote>({null})
//   const [tag, setTag] = useState<string>('')
//   const [notesList, setNotesList] = useState<string[]>([])

//   const [posts, setPosts] = useState([]);

//   // useEffect(() => {
//   //   fetch('http://localhost:5000/')
//   //     .then(response => response.json())
//   //     .then(json => console.log(json))
//   // }, []);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     setNote(event.target.value)
//   }

//   const addNote = (): void => {
//     setNotesList([...notesList, note])
//     setNote('')
//   }

//   return (
//     <div className="App">
//       <div className="header">
//         <div className="inputContainer">
//           <input
//             type="text"
//             placeholder='Введите текст'
//             value={note}
//             name='note'
//             onChange={handleChange} />
//           <input
//             type="text"
//             placeholder='Поиск по тегу'
//             value={tag}
//             name='filter'
//             onChange={handleChange} />
//         </div>
//         <button onClick={addNote}>Добавить</button>
//       </div>
//       <div className="notesList">
//         {notesList.map((note: string, key: number) => {
//           return <ListItem key={key} note={note} />
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
