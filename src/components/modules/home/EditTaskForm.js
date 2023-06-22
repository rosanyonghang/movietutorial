export const EditTaskForm = (props) => {
    return  <form onSubmit={props.editTaskHandler}>
        <input type="text" name={"title"}
               value={props.editFormValues.title}
               placeholder={"Enter task name"}
               onChange={props.editFormHandler}/>

        <input type="text"
               value={props.editFormValues.description}
               name={"description"} placeholder={"Enter task description"}
               onChange={props.editFormHandler}
        />
        <select
            value={props.editFormValues.status}
            name={"status"}
            onChange={props.editFormHandler}
        >
            <option value="todo">todo</option>
            <option value="inProgress">inProgress</option>
            <option value="done">done</option>
        </select>
        <button type={"submit"}>Add task</button>
    </form>
}