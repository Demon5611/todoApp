import React from "react";

interface TodoListProps {
  tasks: { task: string; completed: boolean }[];
  toggleTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`todo-item ${task.completed ? "completed" : ""}`}
        >
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              role="checkbox"
             
            />
            <span className="checkbox">
              {task.completed && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.285 6.11l-11.667 11.667-4.903-4.903 1.586-1.586 3.317 3.317 10.081-10.081z"/>
                </svg>
              )}
            </span>
            <span className="task-text">{task.task}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
