import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "../css/TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [inputError, setInputError] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length > 0) {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      setInputError("Min. 1 char");
    }
  };

  const onChange = (event) => {
    if (event.target.value.length < 1) {
      setInputError("Min. 1 char");
    } else {
      setInputError("");
    }
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        className={inputError.length > 0 ? "is-invalid" : ""}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para comer"
      />
      {inputError.length > 0 && <span className="error">{inputError}</span>}
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Crear
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
