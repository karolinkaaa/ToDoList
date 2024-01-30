import React from "react";

function ToDoItem({ task, onDone, onDelete }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button className="grönKnapp" onClick={onDone}>
        Done
      </button>
      <button className="rödKnapp" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
