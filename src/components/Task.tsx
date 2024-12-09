import { useState } from "react";


export function Task({ id, text, completed }: { id: string, text: string, completed: boolean }) {

    const [completedState, setCompleted] = useState(completed);

    return (
        <li>
            <input type='checkbox' checked={completedState} onChange={(e) => { handleCheck(e.target.checked, id, text, setCompleted) }}></input>
            <p>{text}</p>
            <button>Remove</button>
        </li>
    )
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
        .then(response => response.json())
        .then(data => console.log(data))
    return;
}