import React from 'react'
import Axios from 'axios'

import styles from './Card.module.css'


export default function Card({name,age,gender,imageUrl}) {
    //React.useEffect(()=>{console.log(imageUrl);},[imageUrl])
    // const [image,setImage] = React.useState('https://www.bil-jac.com/Images/DogPlaceholder.svg');

    // React.useEffect(()=>{    
    //     Axios.get("https://placedog.net/250/250?random", {
    //     responseType: "blob",
    //   }).then((responce) => {
    //     setImage(URL.createObjectURL(responce.data));
    //   });},[])

    return (
        <div className={styles.card}>
            <img className={styles.background_image} src={imageUrl}/>
            <div className={styles.info}>{name}</div>
            <div className={styles.info}>{age}</div>
            <div className={styles.info}>{gender}</div>
        </div>
    )
}
