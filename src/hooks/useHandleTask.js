export default function useHandleTask(tasks, setTasks){
  
  const deleteTask = (task) => {
    const newTasks = tasks.filter(p => p[0] != task[0])
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const changeStatusTask = (setStatus, index) => {
    const newTasks = tasks.map((t, i) => i === index ? [t[0], !t[1]] : t)
    setTasks(newTasks)
    setStatus(newTasks[index][1])
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  return [deleteTask, changeStatusTask]

}