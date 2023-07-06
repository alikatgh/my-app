import React, { useState } from "react";

function TaskManager() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAdd = (e) => {
    if (e.key === "Enter") {
      // Add the task to the tasks array and clear the input field
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        onKeyDown={handleTaskAdd}
        placeholder="Add a task"
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
