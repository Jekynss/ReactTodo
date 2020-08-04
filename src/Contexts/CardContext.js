import React from "react";

export const CardContext = React.createContext();

export const CardProvider = (props) => {
  const [card, setCard] = React.useState({ name: "", age: "", gender: "Male" });

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {props.children}
    </CardContext.Provider>
  );
};
