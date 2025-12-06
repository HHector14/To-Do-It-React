import '../App.css'

export default function Form({ task, setTask, tasks, setTasks }) {
  
  return (
    <div className='section-small'>
      <h1>NEW TASK</h1>
      <textarea wrap='wrap' placeholder='TYPE A NEW TASK' value={task} className='inputText' rows="1" onChange={e => setTask(e.target.value)} />
      <br />
      <button
        className='primary'
        onClick={() => {
          if (task.trim() == '') {
            window.alert("Ingresa la tarea que deseas agregar")
          } else {
            setTasks([...tasks, [task, false]])
            setTask("")
          }
        }}>ADD</button>
    </div>
  )
}