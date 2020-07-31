import React from "react";

import "../styles/App.css";

import AddTodoForm from "./AddTodoForm";
import TodoLists from "./TodoLists";
import SearchComponent from "./SearchComponent";
import Filters from "./Filters";

export default function App() {
  const[searchString,setSearchString] = React.useState('');
  const[completed, setCompleted] = React.useState([]);
  const[activeFilter,setActiveFilter] = React.useState('All');
  const[todos, setTodos] = React.useState([
  { content: "Hello", id: "checkbox-1" },
  { content: "Word", id: "checkbox-2" },
  { content: "World", id: "checkbox-3" },])

   const setComplitedBoxes = (id) => {
    const completedWithOutId = completed.filter((elem) => {
      return elem !== id;
    });

      completed.includes(id) ? setCompleted(completedWithOutId) :
      setCompleted([...completed, id]);
  };

    const deleteTodoItem = (id) => {
      setTodos(
        todos.filter((elem) => {
          return elem.id !== id;
        })
      );

      setCompleted(completed.filter((elem) => {   //delete id from complited
        return elem !== id;
      }));

    };

  const addTodo = (todo) => {
    todo.id = Math.random().toString();
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <div className="main">
        <h1 className="header">todos</h1>
        <div className="container">
          <SearchComponent setSearchString={setSearchString} />
          <TodoLists
            todos={todos}
            deleteTodoItem={deleteTodoItem}
            setComplitedBoxes={setComplitedBoxes}
            completed={completed}
            activeFilter={activeFilter}
            search_string={searchString}
          />
          <AddTodoForm addTodo={addTodo} />
          <Filters
            filters={["All", "Active", "Completed"]}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
      </div>
    </div>
  );

}
