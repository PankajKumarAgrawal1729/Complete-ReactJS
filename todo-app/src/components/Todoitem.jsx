import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span>
        {props.completed ? <input type="checkbox" checked/>: <input type="checkbox" />}
        <span className="todo-item-text">{props.item}</span>
      </span>
      <p>...</p>
    </li>
  );
};

export default TodoItem;
