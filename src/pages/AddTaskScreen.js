import {AddTaskForm} from "../components/modules/home/AddTaskForm";
import {EditTaskForm} from "../components/modules/home/EditTaskForm";
import {TasksList} from "../components/modules/home/TasksList";
import {useState} from "react";
import {useNavigate} from "react-router";
import {TaskCard} from "../components/modules/home/TaskCard";
import {TASKS_MOCK} from "../utils/mockData";

const EDIT_INITIAL_VALUES = {id: '', title: '', description: '', status: ''};
export const AddTaskScreen = () => {
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const [mode, setMode] = useState('add');
    const [formValues, setFormValues] = useState({title: '', description: ''})
    const [editFormValues, setEditFormValues] = useState({...EDIT_INITIAL_VALUES})
    const [tasks, setTasks] = useState([...TASKS_MOCK]);


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
        const index = tasks.findIndex(v => v.id === editFormValues.id);
        const tempTasks = [...tasks];
        tempTasks[index] = {...editFormValues};
        setTasks(tempTasks);
        setEditFormValues({...EDIT_INITIAL_VALUES});
        setMode('add');
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
            {mode === 'add' ? <AddTaskForm
                    addTaskHandler={addTaskHandler}
                    formHandler={formHandler}
                    formValues={formValues}
                /> :
                <EditTaskForm
                    editTaskHandler={editTaskHandler}
                    editFormHandler={editFormHandler}
                    editFormValues={editFormValues}
                />
            }
        </section>
        <TasksList
            selectTask={selectTask}
            deleteTask={deleteTask}
            tasks={tasks}
        />
    </section>
}