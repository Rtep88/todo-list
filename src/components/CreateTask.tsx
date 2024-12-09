import { useState } from 'react'
import '../App.css'
import { TaskIf } from '../App'

function CreateTask({ tasks, setTasks }: { tasks: TaskIf[], setTasks: any }) {

    const [description, setDescription] = useState<string>("")

    return (
        <>
            <input type="text" id="description" onInput={(e) => setDescription((e.target as HTMLInputElement).value)} />
            <button onClick={() => HandleCreate(description, tasks, setTasks)}>Create</button>
        </>
    )
}

function HandleCreate(description: string, tasks: TaskIf[], setTasks: any) {
    if (description == "")
        return;

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: description, completed: false })
    })

    setTasks([...tasks, { id: "", title: description, completed: false }]);
}

export default CreateTask
