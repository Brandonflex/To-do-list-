import React from "react";

interface TaskProps {
  id: number;
  title: string;
  category: string;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, category, onDelete }) => {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Task;