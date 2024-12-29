import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import ProgressBar from './components/ProgressBar';
import './index.css';



export default function App() {
  const [todos, setTodos] = useState(() => {
    // Load from localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodos = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  const handleEditTodos = (index, updatedTodo) => {
    setTodos(todos.map((todo, todoIndex) => (todoIndex === index ? updatedTodo : todo)));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
     <header>
  <h1 className="todo-app-title">To-do App</h1> {/* Updated with class for styling */}
  <button className="dark-mode-btn" onClick={toggleDarkMode}>
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
</header>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TodoInput handleAddTodos={handleAddTodos} />
      <ProgressBar todos={todos} />
      <TodoList
        todos={filteredTodos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      />
    </div>
  );
}
