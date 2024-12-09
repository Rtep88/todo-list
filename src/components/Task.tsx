export function Task({ id, text }: { id: string, text: string}) {

    return (
        <>
            <li id={id}>
                <input type='checkbox'></input>
                <p>{text}</p>
                <button onClick={() => HandleDelete(id)}>Remove</button>
            </li>
        </>
    )
}

function HandleDelete(id: string) {
    fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE',
    })
    return;
}