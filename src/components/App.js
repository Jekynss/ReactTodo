import React from "react";

import "../styles/App.css";

import AddTodoForm from "./AddTodoForm";
import TodoLists from "./TodoLists";
import SearchComponent from "./SearchComponent";
import Filters from "./Filters";

export default function App() {
  const[searchString,setSearchString] = React.useState('');
  const[completed, setCompleted] = React.useState([]);

   const setComplitedBoxes = (id) => {
    const completedWithOutId = completed.filter((elem) => {
      return elem !== id;
    });

      completed.includes(id) ? setCompleted(completedWithOutId) :
      setCompleted([...completed, id]);
  };

  return (
    <div className="App">
      <div className="main">
        <h1 className="header">todos</h1>
        <div className="container">
          <SearchComponent setSearchString={setSearchString} />
          <TodoLists
            setComplitedBoxes={setComplitedBoxes}
            completed={completed}
            search_string={searchString}
          />
          <AddTodoForm/>
          <Filters/>
        </div>
      </div>
    </div>
  );

}
