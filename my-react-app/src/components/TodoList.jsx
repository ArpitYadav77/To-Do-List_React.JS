import React from 'react';
import TodoCard from './TodoCard';


export default function TodoList({ todos, handleDeleteTodos, handleEditTodos }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet! Add some above.</p>
      ) : (
        todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            onDelete={() => handleDeleteTodos(index)}
            onEdit={(updatedTodo) => handleEditTodos(index, updatedTodo)}
          />
        ))
      )}
    </ul>
  );
}
