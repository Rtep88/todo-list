import { useState } from 'react'
import '../App.css'
import { DATABASE_URL, FetchDatabase } from '../App'

function CreateTask({ setTasks }: { setTasks: any }) {

    const [description, setDescription] = useState<string>("")
    const [date, setDate] = useState<Date>(new Date())

    return (
        <div id="create_task">
            <label htmlFor="description">Popis:</label>
            <input type="text" id="description" onInput={(e) => setDescription((e.target as HTMLInputElement).value)} />
            <br/>
            <label htmlFor="date">Datum odevzdání:</label>
            <input type='date' id='date' min={new Date(Date.now()).toISOString().split('T')[0]} onInput={(e) => setDate(new Date((e.target as HTMLInputElement).value))}></input>
            <button onClick={() => HandleCreate(description, setTasks, date)}>Create</button>
        </div>
    )
}

function HandleCreate(description: string, setTasks: any, date: Date) {
    if (description == "")
        return;

    fetch(DATABASE_URL + '/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: description, completed: false, finishDate: date.getTime() })
    })

    FetchDatabase(setTasks);
}

export default CreateTask
