import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { useState } from "react";
function App() {
  const [listToDo, setlistToDo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setlistToDo([...listToDo, inputText]);
  };
  const deleteListItem = (key) => {
    let newList = [...listToDo];
    newList.splice(key, 1);
    setlistToDo([...newList]);
  };
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <ToDoInput addList={addList} />
          <h1 className="app-heading">Tasks</h1>
          <hr />
          {listToDo.map((listItem, i) => {
            return (
              <ToDoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
