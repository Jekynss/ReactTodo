import React,{useContext} from 'react'
import {CardContext} from '../../Contexts/CardContext'

import styles from './InputGenderRadio.module.css'

export default function InputGenderRadio({name,defaultVal}) {
    const {card,setCard} = useContext(CardContext);

    const handleChangeRadio = (e) => {
        setCard({...card,gender:`${e.target.value}`})
      }

    return (
        <div className={styles.gender_radio_button}>
        <input
          className={styles.input_radio}
          id={name}
          type="radio"
          name="gender"
          value={name}
          onChange={handleChangeRadio}
          defaultChecked={defaultVal ? true : false}
        />
        <label htmlFor={name}>{name}</label>
      </div>
    )
}
