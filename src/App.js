// App.js
import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
    const [categories] = useState([
        { id: 1, name: '💑Личные' },
        { id: 2, name: '💼Работа' },
        { id: 3, name: '🔔Домашние дела' },
        { id: 4, name: '🎶Отдых' }, // Новая категория
        { id: 5, name: '🎯Учеба' }, // Новая категория
    ]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [tasks, setTasks] = useState({
        1: [],
        2: [],
        3: [],
        4: [], // Задачи для категории "Отдых"
        5: [], // Задачи для категории "Учеба"
    });

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleAddTask = (text) => {
        if (selectedCategory) {
            const newTask = { id: Date.now(), text, completed: false };
            setTasks((prevTasks) => ({
                ...prevTasks,
                [selectedCategory]: [...prevTasks[selectedCategory], newTask],
            }));
        }
    };

    const handleDeleteTask = (taskId) => {
        if (selectedCategory) {
            setTasks((prevTasks) => ({
                ...prevTasks,
                [selectedCategory]: prevTasks[selectedCategory].filter((task) => task.id !== taskId),
            }));
        }
    };

    const handleToggleTask = (taskId) => {
        if (selectedCategory) {
            setTasks((prevTasks) => ({
                ...prevTasks,
                [selectedCategory]: prevTasks[selectedCategory].map((task) =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                ),
            }));
        }
    };

    return (
        <div className="container">
            <CategoryList categories={categories} onSelect={handleCategorySelect} />
            {selectedCategory && (
                <div>
                    <h2>Задачи в категории: {categories.find((c) => c.id === selectedCategory).name}</h2>
                    <TaskList tasks={tasks[selectedCategory]} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
                    <TaskForm onAddTask={handleAddTask} />
                </div>
            )}
        </div>
    );
}

export default App;
