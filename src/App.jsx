import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Todolist  from "./Todolist";

const App = () => {
    const [inputList, setInputList] =  useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (event) => {
       setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems( (oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    };
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });

        });

    };
    return <>
    <div className="main_div">
        <div className="center_div">
         <br />
         <h1>To Do List</h1>  
         <br/>
          <input type="text" 
          placeholder='Add a Items'
          value={inputList}
          onChange={itemEvent} />
          <Button onClick={listOfItems} className="newBtn">
              <AddIcon />
          </Button>

          <ol>
            {  items.map( (itemval, index) => {
               return <Todolist 
               key={index} 
               id={index}
               text ={itemval}
               onSelect={deleteItem} 
                />;
              })
              }
          </ol>
        </div>
    </div>
    </>;

};

export default App;
