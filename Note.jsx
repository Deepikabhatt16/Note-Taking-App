import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {
  function handledelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1 className="topic">{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handledelete}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
