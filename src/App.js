import React from "react";
import TaskManager from "./TaskManager";
import './CSS/App.css'

const App = () => {
  return (
    <div className="whole" >
      <h1 className="title">Daily Task Tracker</h1>
      <TaskManager />
    </div>
  );
};

export default App;
