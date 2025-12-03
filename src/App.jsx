import { useEffect, useState } from 'react'
import './App.css'
import TasksCard from './components/TasksCard'
import Form from './components/Form'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <>
      <div className='container'>
        <Form
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
        />
        <TasksCard
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </>
  )
}

export default App
