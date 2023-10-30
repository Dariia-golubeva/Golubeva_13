// TaskCard.js
import React, { useState } from 'react';

function TaskCard({ task, onDelete, onToggle }) {
    const handleDeleteClick = () => {
        onDelete(task.id);
    };

    const handleToggleClick = () => {
        onToggle(task.id);
    };

    return (
        <div className={'task-card'}>
            <h3 className={`task-card ${task.completed ? 'completed' : ''}`}>{task.text}</h3>
            <button onClick={handleToggleClick}>
                {task.completed ? 'Отменить выполнение' : 'Отметить как выполненное'}
            </button>
            <button onClick={handleDeleteClick}>Удалить</button>
        </div>
    );
}

export default TaskCard;
