import React from "react";
import AddTodo from "./AddTodo";
import CompletedTodos from "./CompletedTodos";
import TodoList from "./TodoList";
import TodosProvider from "./TodosContext";

function App() {
  return (
    <TodosProvider>
      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
      <CompletedTodos />
    </TodosProvider>
  );
}
export default App;
