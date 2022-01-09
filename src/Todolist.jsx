import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const Todolist = (props) => {
    const [line, setLine] = useState(false)
   const cutIt = () => {
       setLine(true);
   };
   return(
   <>
   <div className="todo_style">
     <spam onClick={cutIt}>
         <DeleteIcon className="deleteIcon" />
     </spam>
   <li style={{ textDecoration: line ? "line-through" : "none"}}> {props.text} </li>
   </div>
   </>
    );
}
export default  Todolist;