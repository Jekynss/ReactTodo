import React,{useContext} from 'react'
import { CardsContext } from "../../Contexts/CardsContext";

export default function ProfilePage(props) {
    const {cards} = useContext(CardsContext);
    const current_id=props.match.params.id;
    const card=cards.find((card)=>card.id===current_id)
    console.log(typeof(current_id),cards,card);
    return (card ?
        <div>
            <h1>Dog id is: {card.id}</h1>
            <h3>Dog name is: {card.name}</h3>
            <h3>Dog age is: {card.age}</h3>
            <h3>Dog gender is: {card.gender}</h3>
        </div>
        :
        <div>Not found</div>
    )
}
