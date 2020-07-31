import React from "react";
import TodoListItem from "./TodoListItem";
import {connect} from 'react-redux';

import "../styles/components/TodoLists.css";


function TodoLists({
  todos,
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

  const filteredTodos = todos.filter((todo) => {return matchesTheSearch(todo.content) && matchesTheFilter(todo.id)});
  return (
    <div id="options">
      <ul className="main__container__item__todo-list">
        {filteredTodos.map((elem) => {
          return (
            <TodoListItem
              key={elem.id}
              content={elem.content}
              id={elem.id}
              setComplitedBoxes={setComplitedBoxes}
              completed={completed}
            />
          )
        })}
      </ul>
    </div>
  );
}
const mapStateToProps=(state, ownProps)=>{
  return {todos:state.todos.todos,activeFilter:state.todos.activeFilter}
}

export default connect(mapStateToProps)(TodoLists)