import React from 'react'

import styles from './Card.module.css'

export default function Card({name,age,gender}) {

    return (
        <div className={styles.card}>
            <div className={styles.info}>{name}</div>
            <div className={styles.info}>{age}</div>
            <div className={styles.info}>{gender}</div>
        </div>
    )
}
