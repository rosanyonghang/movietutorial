import {TaskCard} from "./TaskCard";

export const TasksList = (props) => {
    const getTaskValue = (title)=>{
        alert(title)
    }

    const getTaskValue2 = (title)=>{
        alert(title);
    }

    return <div className={"tasks-list"}>
        <h2>Tasks List</h2>
        <div className="tasks">
            {props.tasks.map((cardData, key) => (
                <TaskCard key={key} data={cardData} triggerAlert={getTaskValue} getTaskValue2={()=>getTaskValue2(cardData.title)} random={"hehehe"}>
                    {/*<h1>children</h1>*/}
                </TaskCard>
            ))}
        </div>
    </div>
}