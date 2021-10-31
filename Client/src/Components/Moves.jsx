import React from 'react'
import styles from './Styles/moves.module.css'

function Moves({name , mount , date , type , id}) {
    
    
    let year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
    let mounth = date.charAt(5) + date.charAt(6);
    let day = date.charAt(8) + date.charAt(8);

    
    
    return (
        <div className={styles.moves}>
        <ul className={styles.list}>
          <li className={styles.name}> {name}</li>  
          <li className={styles.mount}>$ {mount}</li>
          <li className={styles.date}>{day}/{mounth}/{year}</li>
          <li className={styles.type}>{type}</li>
          </ul>
        </div>
    )
}

export default Moves
