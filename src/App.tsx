import React, { ChangeEvent, FC, useState, useEffect } from 'react';
// import { idText } from 'typescript';
import './App.css';
import { ListItem } from './components/ListItem';
import { INote } from './Interface';

const App: FC = () => {
  const [note, setNote] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [notesList, setNotesList] = useState<INote[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNote(event.target.value)
  }

  const addNote = (): void => {

    const newNote = { note: note, tag: tag }
    setNotesList([...notesList, newNote])
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
        {notesList.map((note: INote, key: number) => {
          return <ListItem key={key} note={note} />
        })}
      </div>
    </div>
  );
}

export default App;
