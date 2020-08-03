import React from "react";
import {CardContext} from '../../Contexts/CardContext'

import styles from "./MainForm.module.css";

export default function MainForm() {
  const [card,setCard] = React.useState({name:'',age:'',gender:'Male'})
  const {cards,setCards} = React.useContext(CardContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    const target = e.target;
    setCards([...cards,{name:target.name.value,age:target.age.value,gender:target.gender.value}])
    setCard({name:'',age:'',gender:'Male'})
  }

  const handleChangeName=(e)=>{
    const propValue=e.target.value;
    setCard({...card, name:`${propValue}`})
  }

  const handleChangeAge=(e)=>{
    setCard({...card, age:`${e.target.value}`})
  }

  return (
    <div className={styles.container}>
      <form className={styles.main_form} onSubmit={handleSubmit}>
        <div className={styles.text_inputs}>
          <input className={styles.input_text} type="text" name="name" placeholder="Enter your dog's name" onChange={handleChangeName} value={card.name}/>
          <input className={styles.input_text} type="number" name="age"  placeholder="Enter your dog's age" onChange={handleChangeAge} value={card.age}/>
        </div>
        <div className={styles.bottom_line}>
        <div className={styles.radio_buttons}>
          <div className={styles.gender_radio_button}>
            <input
              className={styles.input_radio}
              id="male"
              type="radio"
              name="gender"
              value="Male"
              defaultChecked
            />
            <label htmlFor="male">Mail</label>
          </div>
          <div className={styles.gender_radio_button}>
            <input
              className={styles.input_radio}
              type="radio"
              name="gender"
              value="Female"
              id="female"
            />
            <label htmlFor="female">Femail</label>
          </div>
          </div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
}
