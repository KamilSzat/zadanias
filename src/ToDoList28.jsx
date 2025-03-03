import React, {useState, } from "react";


const ToDoList28 = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const addTask = () => {
        if(task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Lista zadań do zrobienia ciupy</h2>
            <input
                type=" text "
                value={task }
                onChange={(e) => setTask (e.target.value)}
                placeholder=" Dodaj zadanie ciupie"
            />
            <button onClick={addTask}> Dodaj </button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={ index }> { t }
                        <button onClick={() => removeTask ( index )}> Usun zadanie ciupie</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ToDoList28;