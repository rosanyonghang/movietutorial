import {AddTaskForm} from "../components/modules/home/AddTaskForm";
import {TasksList} from "../components/modules/home/TasksList";
import {useState} from "react";
import {useNavigate} from "react-router";
import {TaskCard} from "../components/modules/home/TaskCard";

export const AddTaskScreen = () => {
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({title: '', description: ''})
    const [tasks,setTasks] = useState([
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
    ]);


    const formHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }


    const addTaskHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks,
            {
            ...formValues,
            // title: formValues.title,
            // description: formValues.description,
            id: (new Date()).toString(),
            status: 'todo'
        }]);
    }
    const getTaskValue = (title)=>{
        alert(title)
    }

    const getTaskValue2 = (title)=>{
        alert(title);
    }
    const deleteTask = (id)=>{
        const tempTasks = tasks.filter(v=> v.id !== id);
        setTasks(tempTasks);
    }

    return <section className="home-screen screen">
        <section>
            <h1> <button onClick={()=>navigate(-1)}>back</button>  Add Task</h1>
            <form onSubmit={addTaskHandler}>
                <input type="text" name={"title"}
                       value={formValues.title}
                       placeholder={"Enter task name"}
                       onChange={formHandler}/>

                <input type="text"
                       value={formValues.description}
                       name={"description"} placeholder={"Enter task description"}
                       onChange={formHandler}
                />
                <button type={"submit"}>Add task</button>
            </form>
        </section>
        <div className={"tasks-list"}>
            <h2>Tasks List</h2>
            <div className="tasks">
                {tasks.map((cardData, key) => (
                    <div className={"card"} key={key}>
                        <div>{cardData.title}</div>
                        <p>{cardData.description}</p>
                        <button onClick={()=>deleteTask(cardData.id)}>Delete Task</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
}