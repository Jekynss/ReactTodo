import React from "react";

import '../styles/components/AddTodo.css'

class AddTodoForm extends React.Component {
    state={
        content:"",
        id:""
    }
      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content:''});
      }

      handleChange=(e)=>{
          this.setState({content:`${e.target.value}`})
      }

  render() {
    return (
      <form id="addTodoForm" className="main__container__input-add" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="add_string_input"
          className="main__container__input-add__input"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button onClick={null} className="main__container__input-add__button">
          Add
        </button>
      </form>
    );
  }
}

export default AddTodoForm;
