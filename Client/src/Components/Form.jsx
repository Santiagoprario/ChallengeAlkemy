import React from 'react';
import styles from './Styles/form.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { useState } from 'react';
import { postMoves , getMoves} from '../Reducer/Actions';

function Form({option }) {
    const dispatch = useDispatch()
    const [state, setState] = useState({
      name: '',
      mount: 0,
      date:''
    })
    

    const idUser = localStorage.getItem('idUser');
    const title = option

    const handlesubmit = function () {
      dispatch(postMoves(state,title,idUser));
      dispatch(getMoves(idUser));
    }

   const handleInputChange = function(e) {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }


    return (
        <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <hr />
        <form onSubmit={handlesubmit} className={styles.form}>
        <input name='name' 
         value={state.name}
         onChange={(e) => handleInputChange(e)}
         className={styles.input}
         type="text"
         placeholder='Ingrese el concepto...' />
        <input name='mount'
         value={state.mount}
         onChange={(e) => handleInputChange(e)}
         className={styles.input}
         type="number" 
         placeholder='Ingrese el monto...'/>
        <input name='date'
         onChange={(e) => handleInputChange(e)}
         value={state.date}
         className={styles.input}
         type="date" 
          />

        <button name='submit'
        className={styles.button}
        type='submit'>Registrar movimiento</button>
        </form>
        </div>
    )
}

export default Form
