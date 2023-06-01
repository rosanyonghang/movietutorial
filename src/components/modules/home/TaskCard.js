export const TaskCard = (props) => {
    return <div className={"card"}>
        <div>{props.data.title}</div>
        <p>{props.data.description}</p>
    </div>
}