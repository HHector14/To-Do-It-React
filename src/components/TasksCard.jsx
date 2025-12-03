import Task from "./Task";
import '../App.css'

export default function TasksCard({ tasks, setTasks }) {
  return (
    <div className='section'>
      <h1>TO DO IT</h1>
      {tasks.length == 0 && <p style={{ fontSize: '20px', fontWeight: "bold" }}>NO TASKS YET</p>}
      {tasks.map((item, index) => (
        <Task
          key={index}
          text={item}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  )
}