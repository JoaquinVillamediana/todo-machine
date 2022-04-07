import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./TodoContext";

// const deafultTodos = [
//   { text: "Cortar Cebolla", completed: false },
//   { text: "Cortar Cebollaa", completed: false },
//   { text: "Cortar Cebollaaa", completed: true },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
