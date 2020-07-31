import React from "react";

import '../styles/components/AddTodo.css'
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodoForm(props) {

  const [todoItem, setTodosItems] = React.useState({content:'',id:''});

  const handleSubmit=(e)=>{
      e.preventDefault();
      props.addTodoDispatch(todoItem);
      setTodosItems({content:''});
    }

  const handleChange=(e)=>{
        setTodosItems({content:`${e.target.value}`})
    }

    return (
      <form id="addTodoForm" className="main__container__input-add" onSubmit={handleSubmit}>
        <input
          type="text"
          name="add_string_input"
          className="main__container__input-add__input"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={todoItem.content}
        />
        <button className="main__container__input-add__button">
          Add
        </button>
      </form>
    );
}

const mapDispatchToProps = (dispatch)=>{
  return{
  addTodoDispatch: (todo) => {dispatch(addTodo(todo))}
  }
}


export default connect(undefined,mapDispatchToProps)(AddTodoForm)