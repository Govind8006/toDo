import React from "react";
import { useState } from "react";
const ToDoInput = (props) => {
  const [inputText, setInputText] = useState(" ");
  return (
    <>
      <div className="input-container">
        <input
          value={inputText}
          type="text"
          className="input-box-todo"
          placeholder="Task To Do"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ToDoInput;
