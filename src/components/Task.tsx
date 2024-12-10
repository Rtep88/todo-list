import { useState } from "react";
import { TaskIf } from "../App";


export function Task({ id, text, completed, tasks, setTasks }: { id: string, text: string, completed: boolean, tasks: TaskIf[], setTasks: any }) {
    const [completedState, setCompleted] = useState(completed);
    const [deleted, setDeleted] = useState(false);

    if (!deleted) {
        return (
            <li>
                <input type='checkbox' checked={completedState} onChange={(e) => { handleCheck(e.target.checked, id, text, setCompleted, tasks, setTasks) }}></input>
                <p className={completedState ? 'checked' : ''}>{text}</p>
                <button onClick={() => HandleDelete(id, setDeleted)}>Remove</button>
            </li>
        )
    }
}

function handleCheck(checked: boolean, id: string, text: string, setCompleted: any, tasks: TaskIf[], setTasks: any) {
    setCompleted(checked);

    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: text, completed: checked })
    });

    tasks.find((task: TaskIf) => task.id == id)!.completed = checked;

    setTasks([...tasks].sort((a: TaskIf, b: TaskIf) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0)));
}

function HandleDelete(id: string, setDeleted: any) {
    fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE',
    })

    setDeleted(true);
}