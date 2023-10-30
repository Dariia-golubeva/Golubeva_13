// TaskList.js
import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDeleteTask}
                    onToggle={onToggleTask}
                />
            ))}
        </div>
    );
}

export default TaskList;
