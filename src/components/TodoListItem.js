import React from "react";
import classNames from "classnames";

class TodoListItem extends React.Component {

  render() {
    const { content, id, deleteTodoItem, setComplitedBoxes, completed } = this.props;
    const isCompleted = completed.includes(id);
    return (
      <li className={classNames("main__container__item__todo-list__li", {
        completed: isCompleted,
      })}>
        <input
          type="checkbox"
          id={id}
          className="todo-list__li__checkbox"
          name="todo-list"
          value={content}
          onChange={()=>setComplitedBoxes(id)}
          checked={isCompleted}
        />
        <label
          htmlFor={id}
          className="main__container__item__todo-list__li__label"
        ></label>
        {content}
        <button onClick={()=>deleteTodoItem(id)} className="todo-list__li__destroy"></button>
      </li>
    );
  }
}
export default TodoListItem;
