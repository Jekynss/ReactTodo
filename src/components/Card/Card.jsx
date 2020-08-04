import React from 'react'

import styles from './Card.module.css'


export default function Card({id,name,age,gender,setShowModal}) {
    const handleDelete=(e)=>{
        setShowModal(e.target.parentNode.id);
    }

    return (
        <div className={styles.card} id={id}>
            <a href={`/dogs/${id}`}>
            <img className={styles.background_image} src={'https://placedog.net/250/250?random'} alt="Dog"/>
            </a>
            <div className={styles.info}>{name}</div>
            <div className={styles.info}>{age}</div>
            <div className={styles.info}>{gender}</div>
            <div className={styles.delete_icon} onClick={handleDelete}>X</div>
        </div>
    )
}
