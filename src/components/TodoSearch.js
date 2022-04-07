import React, { useContext } from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        onChange={onSearchValueChange}
        value={searchValue}
        placeholder="Cebolla"
      />
      <p>{searchValue}</p>
    </>
  );
};

export { TodoSearch };
