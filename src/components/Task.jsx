import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Task({text, tasks, SetTasks}) {
  const [completed, setCompleted] = useState(false);
  const deleteTask = (task) => {
    const newTasks = tasks.filter(p => p != task)
    SetTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  return (
  <>
    <div className="task">
      <p className={`${completed ? "task-completed" : ""}`}>
        {completed ? '' : '- '}
         {text.toUpperCase()}</p>
      <button className="warning" 
      onClick={()=> setCompleted(!completed)}>
        {completed ? 'DESMARCAR' : 'COMPLETAR'}
      </button>
      <button className="delete" onClick={() => deleteTask(text)} >ELIMINAR</button>
    </div>
  </>
  )

}