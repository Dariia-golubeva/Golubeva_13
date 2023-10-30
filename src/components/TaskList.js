// TaskList.js
import React from 'react';

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(task.id)}
                    />
                    <span>{task.text}</span>
                    <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
