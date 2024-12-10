import './App.css'
import { useEffect, useState } from "react";
import TaskList from './components/TaskList'
import CreateTask from './components/CreateTask'

export interface ITask {
  id: string,
  title: string,
  completed: boolean
}

export const DATABASE_URL: string = 'http://localhost:3000';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetch(DATABASE_URL + '/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((tasks: ITask[]) => tasks.sort((a: ITask, b: ITask) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0)))
      .then((tasks: ITask[]) => setTasks(tasks));
    return;
  }, []);

  return (
    <>
      <h1>Todo List</h1>

      <CreateTask tasks={tasks} setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
