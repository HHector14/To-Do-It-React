export default function deleteTask(task, tasks, setTasks){
  
  const deleteTask = (task) => {
    const newTasks = tasks.filter(p => p != task)
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  return deleteTask

}