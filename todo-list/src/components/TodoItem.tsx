import React from 'react';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;