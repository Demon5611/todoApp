import React, { useState } from "react";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean }[]>(
    []
  );
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button onClick={addTask}>Add Task</button>
      <TodoList tasks={tasks} toggleTask={toggleTask} />
      <div className="status-bar">
        <span style={{marginBottom: '15px'}}>{tasks.length} items left</span>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear completed</button>
      </div>
    </div>
  );
};

export default App;
