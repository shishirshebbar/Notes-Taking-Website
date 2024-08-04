import React, { useState , useEffect} from "react";
import NotesList from'./Components/NotesList';
import { nanoid } from 'nanoid';
import Search from "./Components/SearchNote"; 
import Header from "./Components/Header";



const App = ()=>{
  const [notes,setnotes] = useState([
    {
      id:nanoid(),
      text:"First note",
      date:"11/02/2024",
    },
    {
      id:nanoid(),
      text:"Second note",
      date:"31/01/2024",
    },
    {
      id:nanoid(),
      text:"Third note",
      date:"12/06/2024",
    },
    {
      id:nanoid(),
      text:"Fourth note",
      date:"21/05/2024",
    },
    {
      id:nanoid(),
      text:"Fifth note",
      date:"02/01/2024",
    },
    {
      id:nanoid(),
      text:"Fifth note",
      date:"03/08/2024",
    },
    {
      id:nanoid(),
      text:"Sixth note",
      date:"05/06/2024",
    }
  ]);

  const [searchtext, setsearchtext] = useState('');
  useEffect(()=>{
    const savednotes = JSON.parse(localStorage.getItem('notes-data'));
    // check if notes are saved in the local storage
    if(savednotes) {
      setnotes(savednotes);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('notes-data',JSON.stringify(notes));

  },[notes])

  const addnote = (text) => {
    const date= new Date();
    const newnote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newnotes = [...notes,newnote];
    setnotes(newnotes);
  }

  const deletenote=(id)=>{
    setnotes(notes.filter((note) => note.id !== id));
  }

  return (
  <div className="container">
    <Header/>
    <Search handlesearchnote={setsearchtext}/>
    <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchtext))} handleaddnote={addnote} handledeletenote={deletenote}/>
  </div>)

};
export default App;