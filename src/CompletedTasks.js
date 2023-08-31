import React from "react";
import "./CSS/CompletedTasks.css"; 

const CompletedTasks = ({ completionPercentage, selectedDate }) => {
  return (
    <div className="completed-tasks">
      <h2 className="completed-tasks-title">Completed Tasks</h2>
      <p>
        <span style={{ fontWeight: 600 }}>Date:</span> {selectedDate.toString()}
      </p>
      <p>
        {" "}
        <span style={{ fontWeight: 600 }}>Completion Percentage:</span>{" "}
        {completionPercentage.toFixed(2)}%
      </p>
    </div>
  );
};

export default CompletedTasks;
