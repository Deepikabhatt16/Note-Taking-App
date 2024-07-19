import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const[expand,setexpand]=useState(false);
  const[note,setnote]=useState({
    title:"",
    content:""
  });
  function handled(event) {
    const {name,value}=event.target;
    setnote(preval=>{
return {...preval,
[name]:value
    };
  });
    }
    function onsubmit(event) {
props.onAdd(note);
setnote( {
   title:"",
  content:""
});
    event.preventDefault();

    }
    function expanded() {
      setexpand(true);
      
    }
  return (
    <div>
      <form className="create-note">
       {expand? <input onChange={handled} name="title" placeholder="Title" value={note.title} />:null}
        <textarea   onClick={expanded}  onChange={handled} name="content" placeholder="Take a note..." rows={expand?"3":"1"} value={note.content}/>
     <Zoom in={expand}><Fab onClick={onsubmit} >
          
          <AddIcon/>
          </Fab></Zoom>   
      </form>
    </div>
  );
}

export default CreateArea;
