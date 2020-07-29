import React from "react";

class AddTodoForm extends React.Component {
  todoList = () => {};

  render() {
    return (
      <form id="addTodoForm" className="main__container__input-add">
        <input
          type="text"
          name="add_string_input"
          className="main__container__input-add__input"
          placeholder="What needs to be done?"
        />
        <button onClick={null} class="main__container__input-add__button">
          Add
        </button>
      </form>
    );
  }
}

export default AddTodoForm;
