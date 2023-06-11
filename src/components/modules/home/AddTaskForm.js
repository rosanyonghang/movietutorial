import {useState} from "react";
import {useNavigate} from "react-router";

export const AddTaskForm = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');

    const [formValues, setFormValues] = useState({title: '', description: ''})

    const navigate = useNavigate();
    // const addTaskHandler = (e) => {
    //     e.preventDefault();
    //     props.addTask({
    //         id: (new Date()).toString(),
    //         title,
    //         description,
    //         status: 'todo'
    //     })
    // }

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
        {/*conditional*/}
        {/*add task*/}
        {/*<button onClick={() => setShowDialog(!showDialog)}>Show add Task dialog</button>*/}
        {/*{ showDialog &&*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea eveniet fugit incidunt neque repellat*/}
        {/*    sequi unde. Accusamus, accusantium architecto cumque dignissimos earum minima natus nemo quam, quas ratione*/}
        {/*    repellat!</p>}*/}

        <form onSubmit={addTaskHandler}>
            {/*<input type="text" name={"taskName"}*/}
            {/*       placeholder={"Enter task name"}*/}
            {/*          value={title}*/}
            {/*       onChange={(e) =>*/}
            {/*           setTitle(e.target.value)}*/}
            {/*/>*/}
            {/*<input type="text"*/}
            {/*          value={description}*/}
            {/*       name={"taskDescription"} placeholder={"Enter task description"}*/}
            {/*       onChange={(e) =>*/}
            {/*           setDescription(e.target.value)*/}
            {/*       }*/}
            {/*/>*/}
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