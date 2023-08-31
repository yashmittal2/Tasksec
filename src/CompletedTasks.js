import React from "react";
import "./CSS/CompletedTasks.css"; 

const CompletedTasks = ({ completionPercentage, selectedDate }) => {
  return (
    <div className="completed-tasks">
      <h2 className="completed-tasks-title">Completed Tasks</h2>
      <p>Date: {selectedDate.toString()}</p>
      <p>Completion Percentage: {completionPercentage.toFixed(2)}%</p>
    </div>
  );
};

export default CompletedTasks;
