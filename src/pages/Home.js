import {AddTaskForm} from "../components/modules/home/AddTaskForm";
import {TasksList} from "../components/modules/home/TasksList";

export const Home = () => {
    return <section className="home-screen screen">
        {/*<AddTaskForm/>*/}
        <TasksList/>
    </section>
}