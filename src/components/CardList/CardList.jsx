import React from 'react';
import Card from '../Card/Card';
import {CardContext} from '../../Contexts/CardContext'

import styles from './CardList.module.css';

export default function CardList() {
    const {cards} = React.useContext(CardContext)
    console.log(cards);
    return (
        <div className={styles.card_list}>
            {cards.map((card)=><Card key={Math.random()} name={card.name} age={card.age} gender={card.gender}/>)}
        </div>
    )
}
