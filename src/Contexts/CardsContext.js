import React,{useState,createContext} from "react";

export const CardsContext = createContext();

export const CardsProvider = (props) => {
  const [cards, setCards] = useState([
    {
      id: "id-1",
      name: "Test1",
      age: 11,
      gender: "Male",
    },
    {
      id: "id-2",
      name: "Test2",
      age: 12,
      gender: "Male",
    },
    {
      id: "id-3",
      name: "Test3",
      age: 13,
      gender: "Male",
    },
  ]);


  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {props.children}
    </CardsContext.Provider>
  );
};
