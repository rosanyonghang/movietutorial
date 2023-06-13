import {AddTaskForm} from "../components/modules/home/AddTaskForm";
import {TasksList} from "../components/modules/home/TasksList";
import {useState} from "react";
import {useNavigate} from "react-router";
import {TaskCard} from "../components/modules/home/TaskCard";

const EDIT_INITIAL_VALUES ={id:'', title: '', description: '', status:''};
export const AddTaskScreen = () => {
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const [mode, setMode] = useState('add');
    const [formValues, setFormValues] = useState({title: '', description: ''})
    const [editFormValues, setEditFormValues] = useState({...EDIT_INITIAL_VALUES})
    const [tasks, setTasks] = useState([
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
    const editFormHandler = (e) => {
        setEditFormValues({
            ...editFormValues,
            [e.target.name]: e.target.value
        });
    }


    const addTaskHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks,
            {
                ...formValues,
                id: (new Date()).toString(),
                status: 'todo'
            }]);
    }
    const editTaskHandler = (e) => {
        e.preventDefault();
        const index = tasks.findIndex(v=> v.id === editFormValues.id);
        const tempTasks = [...tasks];
        tempTasks[index] = {...editFormValues};
        setTasks(tempTasks);
        setEditFormValues({...EDIT_INITIAL_VALUES});
        setMode('add');
    }

    const getTaskValue = (title) => {
        alert(title)
    }

    const getTaskValue2 = (title) => {
        alert(title);
    }
    const deleteTask = (id) => {
        const tempTasks = tasks.filter(v => v.id !== id);
        setTasks(tempTasks);
    }
    const selectTask = (cardData) => {
        setMode('edit');
        setEditFormValues({
            ...cardData
        });
    }

    return <section className="home-screen screen">
        <section>
            <h1>
                <button onClick={() => navigate(-1)}>back</button>
                {mode === 'add' ? 'Add' : 'Edit'} Task
            </h1>
            {mode === 'add' ? <form onSubmit={addTaskHandler}>
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
                </form> :
                <form onSubmit={editTaskHandler}>
                    <input type="text" name={"title"}
                           value={editFormValues.title}
                           placeholder={"Enter task name"}
                           onChange={editFormHandler}/>

                    <input type="text"
                           value={editFormValues.description}
                           name={"description"} placeholder={"Enter task description"}
                           onChange={editFormHandler}
                    />
                    <select
                        value={editFormValues.status}
                        name={"status"}
                        onChange={editFormHandler}
                    >
                        <option value="todo">todo</option>
                        <option value="inProgress">inProgress</option>
                        <option value="done">done</option>
                    </select>
                    <button type={"submit"}>Add task</button>
                </form>}
        </section>
        <div className={"tasks-list"}>
            <h2>Tasks List</h2>
            <div className="tasks">
                {tasks.map((cardData, key) => (
                    <div className={"card"} key={key}>
                        <div>{cardData.title}</div>
                        <p>{cardData.description}</p>
                        <p>{cardData.status}</p>
                        <button onClick={() => selectTask(cardData)}>Edit Task</button>
                        <button onClick={() => deleteTask(cardData.id)}>Delete Task</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
}