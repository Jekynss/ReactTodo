import React from "react";
import TodoListItem from "./TodoListItem";

import "../styles/components/TodoLists.css";

export default function TodoLists({
  todos,
  deleteTodoItem,
  setComplitedBoxes,
  completed,
  search_string,
  activeFilter,
}) {
  const matchesTheSearch = (element_content) => {
    return element_content
      .toLowerCase()
      .includes(search_string.toLowerCase());
  };

  const matchesTheFilter = (elem_id) => {
    return (
      activeFilter === "All" ||
      (activeFilter === "Active" && !completed.includes(elem_id)) ||
      (activeFilter === "Completed" && completed.includes(elem_id))
    );
  };

  return (
    <div id="options">
      <ul className="main__container__item__todo-list">
        {todos.map((elem) => {
          return matchesTheSearch(elem.content) &&
            matchesTheFilter(elem.id) ? (
            <TodoListItem
              key={elem.id}
              content={elem.content}
              id={elem.id}
              deleteTodoItem={deleteTodoItem}
              setComplitedBoxes={setComplitedBoxes}
              completed={completed}
            />
          ) : (
            ""
          );
        })}
      </ul>
    </div>
  );
}
