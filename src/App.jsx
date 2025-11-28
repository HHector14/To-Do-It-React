import {  useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'

function App() {
  const [task, SetTask] = useState("")
  const [tasks, SetTasks] = useState([])

  return (
    <>
      <div className='container'>
        <div className='section'>
          <h1>NUEVA NOTA</h1>
          <textarea wrap='wrap' placeholder='Nueva tarea' value={task} className='inputText' rows="1" onChange={e => SetTask(e.target.value)}/>
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
            }}>AGREGAR</button>
        </div>
        <div className='section'>
          <h1>TAREAS POR HACER</h1>
          {tasks.length == 0 && <p style={{fontSize: '20px', fontWeight: "bold"}}>No hay tareas por hacer</p>}
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
