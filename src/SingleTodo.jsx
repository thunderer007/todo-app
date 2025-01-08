import { useState } from "react";

const SingleTodo = ({ todo, setTodos, removeTodo }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <article className="todo-box">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="todo-checkbox"
      />
      <div className="text-box">
        <p
          style={{
            textDecoration: isChecked && "line-through",
            color: isChecked && "hsl(234, 11%, 52%)",
          }}
        >
          {todo.name}
        </p>
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            onClick={() => removeTodo(todo.id)}
            className="delete-btn"
          >
            <path
              fill="#494C6B"
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        )}
      </div>
    </article>
  );
};

export default SingleTodo;
