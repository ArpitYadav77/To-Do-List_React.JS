import React from "react";

export default function ProgressBar({ todos }) {
  const completed = todos.filter((todo) => todo.completed).length; // Count completed tasks
  const total = todos.length; // Total tasks
  const progress = total === 0 ? 0 : (completed / total) * 100; // Calculate percentage

  return (
    <div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>
        {completed}/{total} tasks completed
      </p>
    </div>
  );
}
