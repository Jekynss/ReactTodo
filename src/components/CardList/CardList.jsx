import React,{useContext} from "react";
import Card from "../Card/Card";
import { CardsContext } from "../../Contexts/CardsContext";

import styles from "./CardList.module.css";

export default function CardList(props) {
  const { cards } = useContext(CardsContext);

  return (
    <div className={styles.card_list}>
      {cards.map((card) => (
        <Card
          key={Math.random()}
          name={card.name}
          age={card.age}
          gender={card.gender}
          id={card.id}
          setShowModal={props.setShowModal}
        />
      ))}
    </div>
  );
}
