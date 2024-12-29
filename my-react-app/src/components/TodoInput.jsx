import React, { useState } from 'react';


export default function TodoInput({ handleAddTodos }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      handleAddTodos({ text, priority, dueDate, completed: false });
      setText('');
      setPriority('Medium');
      setDueDate('');
    }
  };

  return (
    <div className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task..."
        className="input-box"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="date-picker"
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
