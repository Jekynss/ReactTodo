import React from "react";
import { CardsContext } from "../../Contexts/CardsContext";
import InputAge from "../InputAge/InputAge";
import InputName from "../InputName/InputName";
import { CardContext } from "../../Contexts/CardContext";

import styles from "./MainForm.module.css";
import InputGenderRadio from "../InputGenderRadio/InputGenderRadio";

export default function MainForm() {
  const { card, setCard } = React.useContext(CardContext);
  const { setNewCard } = React.useContext(CardsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.name && card.age) {
      setNewCard(card);
      setCard({ name: "", age: "", gender: card.gender });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.main_form} onSubmit={handleSubmit}>
        <div className={styles.text_inputs}>
          <InputName />
          <InputAge />
        </div>
        <div className={styles.bottom_line}>
          <div className={styles.radio_buttons}>
            <InputGenderRadio name="Male" defaultVal={true} />
            <InputGenderRadio name="Female" />
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
