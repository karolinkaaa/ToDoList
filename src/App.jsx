import { useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Bädda sängen", completed: false },
    { id: 2, text: "Diska", completed: false },
    { id: 3, text: "Tvätta", completed: false },
    { id: 4, text: "Dammsuga", completed: false },
    { id: 5, text: "Moppa", completed: false },
    { id: 6, text: "Vika tvätt", completed: false },
  ]);

  function handleDone(taskId) {
    setTasks(function (prevTasks) {
      return prevTasks.map(function (task) {
        return task.id === taskId
          ? { ...task, completed: !task.completed }
          : task;
      });
    });
  }

  function handleDelete(taskId) {
    setTasks(function (prevTasks) {
      return prevTasks.filter(function (task) {
        return task.id !== taskId;
      });
    });
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {tasks.map(function (task) {
          return (
            <ToDoItem
              key={task.id}
              task={task}
              onDone={function () {
                handleDone(task.id);
              }}
              onDelete={function () {
                handleDelete(task.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
