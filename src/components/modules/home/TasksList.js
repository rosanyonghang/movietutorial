import {TaskCard} from "./TaskCard";

export const TasksList = () => {
    const getTaskValue = (title)=>{
        alert(title)
    }

    const getTaskValue2 = (title)=>{
        alert(title);
    }
    const tasks = [
        {id: '1', title: "Task 1", status: 'todo', description: "description 1"},
        {id: '2', title: "Task 2", status: 'todo', description: "description 2"},
        {id: '3', title: "Task 3", status: 'todo', description: "description 3"},
        {id: '4', title: "Task 4", status: 'todo', description: "description 4"},
        {id: '5', title: "Task 5", status: 'todo', description: "description 5"},
        {id: '6', title: "Task 6", status: 'todo', description: "description 6"},
        {id: '7', title: "Task 7", status: 'todo', description: "description 7"},
        {id: '8', title: "Task 8", status: 'todo', description: "description 8"},
        {id: '9', title: "Task 9", status: 'todo', description: "description 9"},
        {id: '9', title: "Task 9", status: 'todo', description: "description 9"},
        {id: '10', title: "Task 10", status: 'todo', description: "description 10"},
    ];

    return <div className={"tasks-list"}>
        <h2>Tasks List</h2>
        <div className="tasks">
            {tasks.map((cardData, key) => (
                <TaskCard key={key} data={cardData} triggerAlert={getTaskValue} getTaskValue2={()=>getTaskValue2(cardData.title)} random={"hehehe"}>
                    <h1>children</h1>
                </TaskCard>
            ))}


        </div>
    </div>
}