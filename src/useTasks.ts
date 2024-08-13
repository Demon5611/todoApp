import { useState } from "react";

interface Task {
  task: string;
  completed: boolean;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return {
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTask,
  };
};
