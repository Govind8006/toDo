import React from "react";
import { MdDelete } from "react-icons/md";
const ToDoList = (props) => {
  return (
    <>
      <li className="list-item">
        {props.item}
        <span className="icons icon-delete">
          <MdDelete
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          />
        </span>
      </li>
    </>
  );
};

export default ToDoList;
