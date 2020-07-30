import React from "react";

import "../styles/App.css";

import AddTodoForm from "./AddTodoForm";
import TodoListsForm from "./TodoListsForm";
import SearchComponent from "./SearchComponent";
import Filters from "./Filters";

class App extends React.Component {
  state = {
    todos: [
      { content: "Hello", id: "checkbox-1" },
      { content: "Word", id: "checkbox-2" },
      { content: "World", id: "checkbox-3" },
    ],
    activeFilter: "All",
    completed: [],
    search_string: "",
  };

  setComplitedBoxes = (id) => {
    const completed = this.state.completed.filter((elem) => {
      return elem !== id;
    });
    console.log(this.state.completed);
    console.log(id);
    this.state.completed.includes(id)
      ? this.setState({ completed: completed })
      : this.setState({ completed: [...this.state.completed, id] });
  };

  setActiveFilter = (value) => {
    this.setState({ activeFilter: value });
  };

  deleteTodoItem = (id) => {
    const todos = this.state.todos.filter((elem) => {
      return elem.id !== id;
    });

    this.setState({ todos: todos });
  };

  addTodo = (todo) => {
    todo.id = Math.random().toString();
    const todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  };

  setSearchString = (search_str) => {
    this.setState({ search_string: search_str });
  };

  render() {
    return (
      <div className="App">
        <div class="main">
          <h1 class="main__h1">todos</h1>
          <div class="main__container">
            <SearchComponent setSearchString={this.setSearchString} />
            <TodoListsForm
              todos={this.state.todos}
              deleteTodoItem={this.deleteTodoItem}
              setComplitedBoxes={this.setComplitedBoxes}
              completed={this.state.completed}
              activeFilter={this.state.activeFilter}
              search_string={this.state.search_string}
            />
            <AddTodoForm addTodo={this.addTodo} />
            <Filters
              filters={["All", "Active", "Completed"]}
              activeFilter={this.state.activeFilter}
              setActiveFilter={this.setActiveFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
