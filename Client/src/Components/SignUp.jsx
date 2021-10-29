import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import styles from './Styles/signUp.module.css';

export default function SignUp() {
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });


  function handleSubmit(e) {
    e.preventDefault();
    let { name , lastname , email , password } = state;
    if(!name || !lastname || !email || !password) {
      return alert('Por favor complete todos los campos')
    }
    axios.post('http://localhost:3001/users/',
    { name,  email , password, lastname })
    .then(r => {
      if (r.data.registered) {
          setTimeout(() => {
              history.push('login');
          }, 1000);
        } else {
          return alert(`No se ha podido registrar el usuario. Intente nuevamente por favor.`)  
        }
      })
     return alert(`Usuario registrado con exito!`)
  }

  const handleInputChange = function(e) {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }


  return (
    <>
      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} > Nombre: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            placeholder="Ingresa tu Nombre"
            autoComplete="off"
            className={styles.input}
            onChange={(e) => handleInputChange(e)}
          />
          <label className={styles.label} > Apellido: </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={state.lastname}
            placeholder="Ingresa tu Apellido"
            autoComplete="off"
            className={styles.input}
            onChange={(e) => handleInputChange(e)}
          />
          <label className={styles.label} > Email: </label>
          <input
            type="text"
            id="emailInput"
            name="email"
            value={state.email}
            placeholder="Ingresa tu email"
            autoComplete="off"
            className={styles.input}
            onChange={(e) => handleInputChange(e)}
          />
          <label className={styles.label} > Contraseña: </label>
          <input
            type='password'
            id='password'
            name="password"
            value={state.password}
            placeholder="Ingresa tu contraseña"
            autoComplete="off"
            className={styles.input}
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit" className={styles.button}>Registrarse</button>
        </form>
      </section>
    </>
  );
};