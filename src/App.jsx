import { useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoForm from "./TodoForm";
import { nanoid } from "nanoid";
import TodosList from "./TodosList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    const newTodo = {
      id: nanoid(),
      name: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  console.log(todos);
  // Remove a todo
  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  return (
    <>
      <Header />
      <main>
        <TodoForm createTodo={createTodo} />
        <TodosList todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
      </main>
    </>
  );
}

export default App;
