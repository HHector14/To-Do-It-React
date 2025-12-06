import { useState } from "react";
import useHandleTask from "../hooks/useHandleTask";

export default function Task({ index,item, tasks, setTasks }) {
  const [completed, setCompleted] = useState(item[1]);
  const [deleteT, changeStatus] = useHandleTask(tasks, setTasks);

  return (
    <>
      <div className="task">
        <p className={`${completed ? "task-completed" : ""}`}>
          {completed ? '' : '- '}
          {item[0].toUpperCase()}</p>
        <button className={completed ? "warning" : "tercary"}
          onClick={() => changeStatus(setCompleted, index)} >
          {completed ? 'UNDO' : 'DONE'}
        </button>
        <button className="delete" onClick={() => deleteT(item)} >DELETE</button>
      </div>
    </>
  )

}