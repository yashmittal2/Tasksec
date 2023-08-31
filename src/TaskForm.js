import React, { useState } from "react";
import "./CSS/TaskForm.css"; // Import the external CSS file

const TaskForm = ({ onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim() !== "") {
      onAddTask(taskDescription);
      setTaskDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
        className="task-input"
      />
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
