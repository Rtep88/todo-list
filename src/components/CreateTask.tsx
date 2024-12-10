import { useState } from 'react'
import '../App.css'
import { DATABASE_URL, ITask } from '../App'

function CreateTask({ tasks, setTasks }: { tasks: ITask[], setTasks: any }) {

    const [description, setDescription] = useState<string>("")

    return (
        <div id="create_task">
            <input type="text" id="description" onInput={(e) => setDescription((e.target as HTMLInputElement).value)} />
            <button onClick={() => HandleCreate(description, tasks, setTasks)}>Create</button>
        </div>
    )
}

function HandleCreate(description: string, tasks: ITask[], setTasks: any) {
    if (description == "")
        return;

    fetch(DATABASE_URL + '/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: description, completed: false })
    })
        .then(task => task.json())
        .then((task: ITask) => setTasks([task, ...tasks]));
}

export default CreateTask
