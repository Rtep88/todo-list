import { useState } from 'react'
import '../App.css'
import { DATABASE_URL, FetchDatabase } from '../App'

function CreateTask({ setTasks }: { setTasks: any }) {

    const [description, setDescription] = useState<string>("")

    return (
        <div id="create_task">
            <input type="text" id="description" onInput={(e) => setDescription((e.target as HTMLInputElement).value)} />
            <button onClick={() => HandleCreate(description, setTasks)}>Create</button>
        </div>
    )
}

function HandleCreate(description: string, setTasks: any) {
    if (description == "")
        return;

    fetch(DATABASE_URL + '/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: description, completed: false })
    })

    FetchDatabase(setTasks);
}

export default CreateTask
