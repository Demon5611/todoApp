import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: { task: string; completed: boolean }[];
  toggleTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo.task}
          completed={todo.completed}
          toggleTask={() => toggleTask(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
