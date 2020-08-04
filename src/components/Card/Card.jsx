import React from 'react'
import Axios from 'axios'

import styles from './Card.module.css'


export default function Card({name,age,gender,imageUrl}) {
    return (
        <div className={styles.card}>
            <img className={styles.background_image} src={imageUrl}/>
            <div className={styles.info}>{name}</div>
            <div className={styles.info}>{age}</div>
            <div className={styles.info}>{gender}</div>
        </div>
    )
}
