import SingleTodo from "./SingleTodo";

const TodosList = ({ todos, setTodos, removeTodo }) => {
  return (
    <section className="todos-list">
      {todos.map((todo) => {
        return (
          <SingleTodo
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            removeTodo={removeTodo}
          />
        );
      })}
    </section>
  );
};

export default TodosList;
