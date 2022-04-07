import React, { useContext } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Modal } from "./components/Modal";
import { TodoContext } from "./TodoContext";
import { TodoForm } from "./components/TodoForm";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>error</p>}
        {loading && <p>cargando</p>}
        {!loading && !searchedTodos.length && <p>no hay todos</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export { AppUI };
