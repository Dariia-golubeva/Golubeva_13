// TaskForm.js
import React, { useState } from 'react';
import '..//App.css'

function TaskForm({ onAddTask }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default TaskForm;
