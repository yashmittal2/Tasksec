import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import './CSS/TaskManager.css'
const TaskManager = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleAddTask = (taskDescription) => {
    const newTask = { description: taskDescription, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const calculateCompletionPercentage = () => {
    if (tasks.length === 0) {
      return 0;
    }

    const completedCount = tasks.filter((task) => task.completed).length;
    return (completedCount / tasks.length) * 100;
  };

  return (
    <div className="task-manager-container">
      <label className="task-manager-label">
        Select Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          className="task-manager-date-input"
        />
      </label>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
      <CompletedTasks
        completionPercentage={calculateCompletionPercentage()}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default TaskManager;
