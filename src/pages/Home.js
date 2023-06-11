import {AddTaskForm} from "../components/modules/home/AddTaskForm";
import {TasksList} from "../components/modules/home/TasksList";
import {useState} from "react";

export const Home = () => {
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

    const addTask = (data)=>{
        setTasks([...tasks, data])
    }

    return <section className="home-screen screen">
        <AddTaskForm addTask={addTask}/>
        <TasksList tasks={tasks}/>
    </section>
}