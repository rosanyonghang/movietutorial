import {TaskCard} from "./TaskCard";
import {getCustomSortArray, getRandomNumbers} from "../../../utils/mockData";

export const TasksList = (props) => {

    return   <div className={"tasks-list"}>
        <h2>Tasks List</h2>
        <div className="tasks">


            {getCustomSortArray(props.tasks, 'id').map((cardData, key) => (
                <div className={"card"} key={key}>
                    <div>{cardData.title}</div>
                    <p>{cardData.description}</p>
                    <p>{cardData.status}</p>
                    <button onClick={() => props.selectTask(cardData)}>Edit Task</button>
                    <button onClick={() => props.deleteTask(cardData.id)}>Delete Task</button>
                </div>
            ))}
            <br/>
        </div>
        {/*{getRandomNumbers(0,10, 5).map((v,key)=>(*/}
        {/*    <div className={"card"} key={key}>*/}
        {/*        <div>{props.tasks[v].title}</div>*/}
        {/*        <p>{props.tasks[v].description}</p>*/}
        {/*        <p>{props.tasks[v].status}</p>*/}
        {/*        <button onClick={() => props.selectTask(props.tasks[v])}>Edit Task</button>*/}
        {/*        <button onClick={() => props.deleteTask(props.tasks[v].id)}>Delete Task</button>*/}
        {/*    </div>*/}
        {/*))}*/}
    </div>
}