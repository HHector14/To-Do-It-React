import {  useEffect, useState } from 'react'
import './App.css'
import Task from './components/Task'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [task, SetTask] = useState("")
  const [tasks, SetTasks] = useLocalStorage("tasks", []);

  return (
    <>
      <div className='container'>
        <div className='section'>
          <h1>NEW TASK</h1>
          <textarea wrap='wrap' placeholder='TYPE A NEW TASK' value={task} className='inputText' rows="1" onChange={e => SetTask(e.target.value)}/>
          <br />
          <button
          className='primary'  
          onClick={() => {
            if(task.trim() == ''){
              window.alert("Ingresa la tarea que deseas agregar")
            }else{
              SetTasks([...tasks, task])
              SetTask("")
            }
            }}>ADD</button>
        </div>
        <div className='section'>
          <h1>TO DO IT</h1>
          {tasks.length == 0 && <p style={{fontSize: '20px', fontWeight: "bold"}}>NO TASKS YET</p>}
          {tasks.map((item,index) => (
            <Task
              key={index}
              text={item}
              tasks={tasks}
              SetTasks={SetTasks}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
