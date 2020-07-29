import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

class TodoListsForm extends React.Component {
  render() {
    this.state = {
      todos: [
        { content: "Hello", new_id: "checkbox-1" },
        { content: "Word", new_id: "checkbox-2" },
        { content: "World", new_id: "checkbox-3" },
      ],
    };
    const { todos } = this.props;
    return (
      <form id="options-form">
        <ul class="main__container__item__todo-list">
          {this.state.todos.map((elem) => {
            return (
              <TodoList
                key={elem.new_id}
                content={elem.content}
                new_id={elem.new_id}
              />
            );
          })}
        </ul>
      </form>
    );
  }
}

export default TodoListsForm;
