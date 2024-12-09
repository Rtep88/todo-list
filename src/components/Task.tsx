import { useState } from "react";


export function Task({ id, text, completed }: { id: string, text: string, completed: boolean }) {

    const [completedState, setCompleted] = useState(completed);
    const [deleted, setDeleted] = useState(completed);

    if (!deleted) {
        return (
            <li>
                <input type='checkbox' checked={completedState} onChange={(e) => { handleCheck(e.target.checked, id, text, setCompleted) }}></input>
                <p>{text}</p>
                <button onClick={() => HandleDelete(id, setDeleted)}>Remove</button>
            </li>
        )
    }
}

function handleCheck(checked: boolean, id: string, text: string, setCompleted: any) {
    setCompleted(checked);

    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: text, completed: checked })
    })
}

function HandleDelete(id: string, setDeleted: any) {
    fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE',
    })

    setDeleted(true);
}