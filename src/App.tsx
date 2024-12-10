import './App.css'
import { useEffect, useState } from "react";
import TaskList from './components/TaskList'
import CreateTask from './components/CreateTask'

export interface TaskIf {
  id: string,
  title: string,
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskIf[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((tasks: TaskIf[]) => tasks.sort((a: TaskIf, b: TaskIf) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0)))
      .then((tasks: TaskIf[]) => setTasks(tasks));
    return;
  }, []);

  return (
    <>
      <CreateTask tasks={tasks} setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
