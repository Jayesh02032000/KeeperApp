import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  var startStatus = "more";

  function handleClick(){
    props.onDelete(props.id);
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p id="textArea">{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}



export default Note;
