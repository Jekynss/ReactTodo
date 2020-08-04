import React from "react";

import { CardContext } from "../../Contexts/CardContext";

import styles from "./InputAge.module.css";

export default function InputAge() {
  const { card, setCard } = React.useContext(CardContext);

  const handleChangeAge = (e) => {
    setCard({ ...card, age: `${e.target.value}` });
  };

  return (
    <React.Fragment>
      <input
        className={styles.input_text}
        type="number"
        name="age"
        placeholder="Enter your dog's age"
        onChange={handleChangeAge}
        value={card.age}
      />
    </React.Fragment>
  );
}
