import React from "react";
class TodoList extends React.Component {
  render() {
    const { content, new_id } = this.props;
    return (
      <li class="main__container__item__todo-list__li scoped">
        <input
          type="checkbox"
          id={new_id}
          className="todo-list__li__checkbox"
          name="todo-list"
          value={content}
        />
        <label
          for={new_id}
          className="main__container__item__todo-list__li__label"
        ></label>
        {content}
        <button class="todo-list__li__destroy"></button>
      </li>
    );
  }
}
export default TodoList;
