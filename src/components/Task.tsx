export function Task({text}: {text: string}, {key}: {key: string}) {

    return (
        <>
            <li id={key}>
                <input type='checkbox'></input>
                <p>{text}</p>
                <button>Remove</button>
            </li>
        </>
    )
}