import React from "react";
import classNames from "classnames";

export default function TodoListItem({
  content,
  id,
  deleteTodoItem,
  setComplitedBoxes,
  completed,
}) {
  const isCompleted = completed.includes(id);

  return (
    <li
      className={classNames("main__container__item__todo-list__li", {
        completed: isCompleted,
      })}
    >
      <input
        type="checkbox"
        id={id}
        className="todo-list__li__checkbox"
        name="todo-list"
        value={content}
        onChange={() => setComplitedBoxes(id)}
        checked={isCompleted}
      />
      <label
        htmlFor={id}
        className="main__container__item__todo-list__li__label"
      ></label>
      {content}
      <button
        onClick={() => deleteTodoItem(id)}
        className="todo-list__li__destroy"
      ></button>
    </li>
  );
}
