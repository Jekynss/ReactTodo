import React from "react";
import Axios from "axios";

export const CardsContext = React.createContext();

export const CardsProvider = (props) => {
  const [cards, setCards] = React.useState([
    {
      id: "id-1",
      name: "Test1",
      age: 11,
      gender: "Male",
      imageUrl: "https://placedog.net/250/250?id=5",
    },
    {
      id: "id-2",
      name: "Test2",
      age: 12,
      gender: "Male",
      imageUrl: "https://placedog.net/250/250?id=6",
    },
    {
      id: "id-3",
      name: "Test3",
      age: 13,
      gender: "Male",
      imageUrl: "https://placedog.net/250/250?id=7",
    },
  ]);

  const [update,updateComponent] = React.useState(false);

  const setNewCard = (card) => {
    card.imageUrl="https://www.bil-jac.com/Images/DogPlaceholder.svg"
    setCards([...cards, card]);
    Axios.get("https://placedog.net/250/250?random", {
      responseType: "blob",
    }).then((responce) => {
      card.imageUrl = URL.createObjectURL(responce.data);
      updateComponent(!update);
    });
  };

  return (
    <CardsContext.Provider value={{ cards, setNewCard }}>
      {props.children}
    </CardsContext.Provider>
  );
};
