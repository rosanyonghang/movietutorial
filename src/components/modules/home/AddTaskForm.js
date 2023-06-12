import {useState} from "react";
import {useNavigate} from "react-router";

export const AddTaskForm = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const [formValues, setFormValues] = useState({title: '', description: ''})

    const navigate = useNavigate();

    const formHandler = (e) => {
        const formTemp = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(formTemp);
    }
    const addTaskHandler = (e) => {
        e.preventDefault();
        props.addTask({
            ...formValues,
            id: (new Date()).toString(),
            status: 'todo'
        })
    }
    return <section>
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
}