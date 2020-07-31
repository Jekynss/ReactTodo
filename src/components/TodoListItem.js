import React from "react";
import classNames from "classnames";
import {connect} from 'react-redux';
import {deleteTodo} from '../redux/actions'

function TodoListItem({
  content,
  id,
  setComplitedBoxes,
  completed,
  deleteTodoDispatch
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
        onClick={() => deleteTodoDispatch(id)}
        className="todo-list__li__destroy"
      ></button>
    </li>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
  deleteTodoDispatch: (todo_id) => {dispatch(deleteTodo(todo_id))}
  }
}


export default connect(undefined,mapDispatchToProps)(TodoListItem)

