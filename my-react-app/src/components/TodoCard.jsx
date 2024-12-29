import React, { useState } from 'react';



  export default function TodoCard({ todo, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);
  
    const saveEdit = () => {
      if (editValue.trim() !== '') {
        onEdit({ ...todo, text: editValue });
        setIsEditing(false);
      }
    };
  
    return (
      <li className="todo-card">
        <div className="todo-content">
          {isEditing ? (
            <div>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="edit-box"
              />
              <button className="save-btn" onClick={saveEdit}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p className="todo-text">
                {todo.text} <span className="priority">[{todo.priority}]</span>{' '}
                {todo.dueDate && <span className="due-date">Due: {todo.dueDate}</span>}
              </p>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete-btn" onClick={onDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
        {/* Checkbox aligned to the right */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onEdit({ ...todo, completed: !todo.completed })}
          className="checkbox"
        />
      </li>
    );
  }
  




