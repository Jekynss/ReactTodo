import React from "react";
import {CardContext} from '../../Contexts/CardContext'

import styles from './InputName.module.css'

export default function InputName() {
    const {card,setCard} = React.useContext(CardContext);

  const handleChangeName = (e) => {
    const propValue = e.target.value;
    setCard({ ...card, name: `${propValue}` });
  };

  return (
    <React.Fragment>
      <input
        className={styles.input_text}
        type="text"
        name="name"
        placeholder="Enter your dog's name"
        onChange={handleChangeName}
        value={card.name}
      />
    </React.Fragment>
  );
}
