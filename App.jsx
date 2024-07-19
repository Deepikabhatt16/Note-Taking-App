import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[notes,setnotes]=useState([]);
  function addnote(note) {
setnotes(preval=>{
  return[...preval,note]
})
  }
  function deletenote(id) {
setnotes(preval=>{
  return preval.filter((item,index)=>{
  return index!==id}
)
}
)
} 
  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addnote}/>
      
     { notes.map((newnotes,index) => {
        return (<Note

        key={index}
        id={index}
        title={newnotes.title} 
        content={newnotes.content}
        onDelete={deletenote}
        />)
})}     
       <Footer />
    </div>
  );
}

export default App;
