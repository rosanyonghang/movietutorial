export const TaskCard = (props) => {
    return <div className={"card"}>
        {props.children} {props.random}
        <div>{props.data.title}</div>
        <p>{props.data.description}</p>
        <button onClick={() => props.triggerAlert(props.data.description)}>Click description</button>
        <button onClick={props.getTaskValue2}>Click me</button>
    </div>
}