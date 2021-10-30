import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styles from './Styles/Login.module.css';
import { logIn } from '../Reducer/Actions';


export default function LogIn() {

  const dispatch = useDispatch();
  const history = useHistory();

  const logged = window.localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });


  const handleInputChange = function(e) {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(logIn(state));
    setTimeout(() => {
      history.push('home');
  }, 1000);
  };

  useEffect(() => {
    if (logged) {
      setIsAuth(logged);
    };
  }, [logged]);

  return (
    <>
      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="emailInput" > Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={state.email}
            placeholder="Ingresa tu email"
            autoComplete="off"
            className={styles.input}
            onChange={(e) => handleInputChange(e)}
          />
          <label className={styles.label} htmlFor="passwordInput"> Contraseña: </label>
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
          <button type="submit" className={styles.button}>Entrar</button>
          <p className={styles.someText}>¿No tienes cuenta? <Link to='/sign-up'>¡Regístrate!</Link></p>

        </form>
      </section>
    </>
  );
};
