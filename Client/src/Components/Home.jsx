import React from 'react';
import styles from './Styles/home.module.css';
import { useState , useEffect} from 'react';
import Form from './Form';
import { useSelector , useDispatch} from 'react-redux';
import { getMoves } from '../Reducer/Actions';



function Home() {
    const dispatch = useDispatch()
    const amount = 0
    const name = useSelector(state => state.name)
    const idUser = useSelector(state => state.id)
    const moves = useSelector(state => state.moves)

    const [entry, setEntry] = useState({
        text : true,
    })
    const [discharge, setDischarge] = useState({
        text : true,
    })
    const entryText = 'Quiero registrar un ingreso';
    const dischargeText = 'Quiero registrar un egreso';

    

    const changeformEntry = () => {
        setDischarge(true)
        if (entry) {
        setEntry(false)
        } else {
            setEntry(true)   
        }
    }

    const changeformDisc = () => {
        setEntry(true)
        if (discharge) {
        setDischarge(false)
        } else {
            setDischarge(true)   
        }
    }
    
    
    
    return (
        <div className={styles.back}>
           <div className={styles.title}>
            Hola {name} !
           </div>
           <hr/>
           <div className={styles.balance}>
               Tu Saldo es : $ {amount}
           </div>
           <div className={styles.moves}>
               <div className={styles.entry}  >
               {entry ? <h3 onClick={changeformEntry}  className={styles.textTitleMoves}> {entryText} </h3> : <Form option='Ingresos' id={idUser}/>}
               </div>
               <div className={styles.discharge}  >
                   {discharge ? <h3 onClick={changeformDisc} className={styles.textTitleMoves}>{dischargeText} </h3> : <Form option='Egresos' id={idUser}/>}
                 </div>
           </div>
           <div>
               Consultas
           </div>
        </div>
    )
}

export default Home;
