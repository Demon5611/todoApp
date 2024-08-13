import React from "react";
import TodoList from "./TodoList";
import { useTasks } from "./useTasks";

const App: React.FC = () => {
  const { tasks, newTask, setNewTask, addTask, toggleTask } = useTasks();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
          />
        </form>
        <TodoList tasks={tasks} toggleTask={toggleTask} />
      </div>
      <div className="status-bar">
        <span style={{ marginBottom: "15px" }}>{tasks.length} items left</span>
        <div>
          <button className={`all ${tasks.length > 0 ? "active" : ""}`} type="button">
            All
          </button>
          <button type="button" className="others">
            Active
          </button>
          <button className="others" type="button">
            Completed
          </button>
          <button className="others" type="button">
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
