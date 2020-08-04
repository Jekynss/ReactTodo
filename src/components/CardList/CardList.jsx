import React from "react";
import Card from "../Card/Card";
import { CardsContext } from "../../Contexts/CardsContext";

import styles from "./CardList.module.css";

export default function CardList() {
  const { cards } = React.useContext(CardsContext);

  return (
    <div className={styles.card_list}>
      {cards.map((card) => (
        <Card
          key={Math.random()}
          name={card.name}
          age={card.age}
          gender={card.gender}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}
