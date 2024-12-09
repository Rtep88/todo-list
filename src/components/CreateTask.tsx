import { useState } from 'react'
import '../App.css'

function CreateTask() {

    const [description, setDescription] = useState<string>("")

    return (
        <>
            <input type="text" id="description" onInput={(e) => setDescription((e.target as HTMLInputElement).value)} />
            <button onClick={() => HandleCreate(description)}>Create</button>
        </>
    )
}

function HandleCreate(description: string) {
    if (description == "")
        return;

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: description, completed: false })
    })
}

export default CreateTask
