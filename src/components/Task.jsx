import { useState } from "react";
import deleteTask from "../hooks/deleteTask";

export default function Task({ text, tasks, setTasks }) {
  const [completed, setCompleted] = useState(false);
  
  const deleteT = deleteTask(text, tasks, setTasks);

  return (
    <>
      <div className="task">
        <p className={`${completed ? "task-completed" : ""}`}>
          {completed ? '' : '- '}
          {text.toUpperCase()}</p>
        <button className={completed ? "warning" : "tercary"}
          onClick={() => setCompleted(!completed)}>
          {completed ? 'UNDO' : 'DONE'}
        </button>
        <button className="delete" onClick={() => deleteT(text)} >DELETE</button>
      </div>
    </>
  )

}