import React, { useState } from "react"
function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(e) {
        setNewTask(e.target.value)

    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }

    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a Task:" value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={addTask}>
                Add Task
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-bton" onClick={() => deleteTask(index)}>Delete</button>

                    <button className="Move-button" onClick={() => moveTaskUp(index)}>Move Up👆</button>

                    <button className="Move-button" onClick={() => moveTaskDown(index)}>Move Down👇</button>
                </li>

            )}
        </ol>

    </div>)
}

export default ToDoList