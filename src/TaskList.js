import React from "react";
import "./CSS/TaskList.css"; 

const TaskList = ({ tasks, onTaskCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-list-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onTaskCompletion(index)}
            className="task-list-checkbox"
          />
          <span className={task.completed ? "task-completed" : ""}>
            {task.description}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
