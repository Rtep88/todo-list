import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: description, completed: true })
    })
        .then(response => response.json())
        .then(data => console.log(data))
    return;
}

export default CreateTask
