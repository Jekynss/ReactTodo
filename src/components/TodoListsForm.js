import React from "react";
import TodoListItem from "./TodoListItem";

import '../styles/components/TodoListsForm.css'

class TodoListsForm extends React.Component {

  matchesTheSearch = (element_content) =>{
    return element_content.toLowerCase().includes(this.props.search_string.toLowerCase())
  }

  matchesTheFilter = (elem_id) =>{
    const {activeFilter, completed}= this.props;
    return activeFilter === "All" ||
    (activeFilter === "Active" && !completed.includes(elem_id)) ||
    (activeFilter === "Completed" && completed.includes(elem_id))
  }

  render() {
    const { todos, deleteTodoItem, setComplitedBoxes, completed } = this.props;
    return (
      <form id="options-form">
        <ul className="main__container__item__todo-list">
          {todos.map((elem) => {
            return this.matchesTheSearch(elem.content) && this.matchesTheFilter(elem.id) ?
             <TodoListItem key={elem.id} content={elem.content} id={elem.id} deleteTodoItem={deleteTodoItem} setComplitedBoxes={setComplitedBoxes} completed={completed} />
              : "";
          })}
        </ul>
      </form>
    );
  }
}

export default TodoListsForm;
