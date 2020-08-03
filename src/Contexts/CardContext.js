import React from "react";

export const CardContext = React.createContext();

export const CardProvider = (props) => {
  const [cards, setCards] = React.useState([
    { id: "id-1", name: "Test1", age: 11, gender: "Male" },
    { id: "id-2", name: "Test2", age: 12, gender: "Male" },
    { id: "id-3", name: "Test3", age: 13, gender: "Male" },
  ]);
  return <CardContext.Provider value={{cards:cards,setCards:setCards}}>{props.children}</CardContext.Provider>;
};
