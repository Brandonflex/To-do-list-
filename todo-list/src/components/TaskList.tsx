import React, { useState } from "react";
import Task from "./Task";

interface TaskItem {
  id: number;
  title: string;
  category: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");

  const addTask = () => {
    if (newTask && category) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, category: category },
      ]);
      setNewTask("");
      setCategory("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            category={task.category}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;