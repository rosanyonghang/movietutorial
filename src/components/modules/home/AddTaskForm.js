import {useState} from "react";
import {useNavigate} from "react-router";

export const AddTaskForm = (props) => {
    return <section>
        <form onSubmit={props.addTaskHandler}>
            <input type="text" name={"title"}
                   value={props.formValues.title}
                   placeholder={"Enter task name"}
                   onChange={props.formHandler}/>

            <input type="text"
                   value={props.formValues.description}
                   name={"description"} placeholder={"Enter task description"}
                   onChange={props.formHandler}
            />
            <button type={"submit"}>Add task</button>
        </form>
    </section>
}