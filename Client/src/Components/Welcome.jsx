import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';

import styles from './Styles/welcome.module.css';

export default function Welcome() {
    
    const dispatch = useDispatch()
    const history = useHistory()


    return(
        <>
           
            <section className={styles.mainDiv}>
             <div className={styles.titlecont}>
                <h3 className={styles.title}>
                    MR.ECONOMy
                </h3>
                </div>
             <div className={styles.divButtons}>
                    <Link to='/login'>
                        <button className={styles.btn}>Ingresar</button>
                    </Link>
                    <Link to='/sign-up'>
                        <button className={styles.btn}>Registrarse</button>
                    </Link>
                </div>
            </section>
        </>
    );
};