import React from "react";
import "../css/CreateTodoButton.css";

const CreateTodoButton = ({ setOpenModal, openModal }) => {
  return (
    <button
      className={`CreateTodoButton ${openModal && "active"}`}
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
