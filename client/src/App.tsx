import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './App.css';
import { ListItem } from './components/ListItem';

const App: FC = () => {
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [notesList, setNotesList] = useState<string[]>([])

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNote(event.target.value)
  }

  const addNote = (): void => {
    setNotesList([...notesList, note])
    setNote('')
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder='Введите текст'
            value={note}
            name='note'
            onChange={handleChange} />
          <input
            type="text"
            placeholder='Поиск по тегу'
            value={tag}
            name='filter'
            onChange={handleChange} />
        </div>
        <button onClick={addNote}>Добавить</button>
      </div>
      <div className="notesList">
        {notesList.map((note: string, key: number) => {
          return <ListItem key={key} note={note} />
        })}
      </div>
    </div>
  );
}

export default App;
