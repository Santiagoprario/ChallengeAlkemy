import React from 'react';
import styles from './Styles/home.module.css';
import { useState , useEffect } from 'react';
import Form from './Form';
import { useSelector , useDispatch} from 'react-redux';
import { getMoves , updateMoves , logOut} from '../Reducer/Actions';
import { useHistory } from 'react-router';
import Moves from './Moves';



function Home() {
    const dispatch = useDispatch()
    const history = useHistory();
    
    const idUser = localStorage.getItem('idUser')
    const moves = useSelector(state => state.moves)

    const [entry, setEntry] = useState({
        text : true,
    })
    const [discharge, setDischarge] = useState({
        text : true,
    })
    const entryText = 'Quiero registrar un ingreso';
    const dischargeText = 'Quiero registrar un egreso';

    useEffect(() => {
        dispatch(getMoves(idUser));
        console.log(moves)
      }, [dispatch,moves]);
    
    
    let nameShow = localStorage.getItem('name');

    const buttonMoves = () => {
        dispatch(getMoves(idUser));
    }
    
    const calculateAmount = (array) => {
        let count = 0;
        for (var i=0 ; i < array.length ; i++) {
            if (array[i].type === 'Ingresos') {
                count = count + array[i].mount;
            } else {
                count = count - array[i].mount;
            }
        }
        return count
    }
    
    const amount = calculateAmount(moves)

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

    const closeSession = () => {
        logOut();
        history.push('login')
    }
    
    
    
    return (
        <div className={styles.back}>
           <div className={styles.nav}>
           <div className={styles.title}>
            Hola {nameShow} !
           </div>
           <button className={styles.close} onClick={closeSession}>Cerrar Sesion</button>
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
               <button onClick={buttonMoves}>Ver Movimientos</button>
               <div className={styles.friendsList}>
                   <Moves name='Concepto' mount='Monto' date='Date' type="Ingreso/Egreso" />
                                {
                                    !moves.length ? <p className={styles.text}>No hay Movimientos en esta cuenta</p> : moves.map(m => <Moves
                                        name={m?.name}
                                        mount={m?.mount}
                                        date={m?.date}
                                        type={m?.type}
                                    />)
                                }
                            </div>
           </div>
        </div>
    )
}

export default Home;
