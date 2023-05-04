import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

let tempKey = 5;

function App() {

  const [notes, updateNotes] = useState([
    {
      key: 1,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    },
    {
      key: 2,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
      key: 3,
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
      key: 4,
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }
  ])

  function createNote(title, content) {
    updateNotes([...notes, {
      key: tempKey,
      title: title,
      content: content
    }])
    tempKey++;
  }

  function deleteNote(key){
    updateNotes(notes.filter((note) => {
      return note.key !== key;
    }));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea  createNote={createNote}/>
      {notes.map(note => <Note key={note.key} id={note.key} title={note.title} content={note.content} deleteNote={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
