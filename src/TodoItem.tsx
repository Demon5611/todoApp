import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  toggleTask: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, toggleTask }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleTask} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
    </li>
  );
};

export default TodoItem;
