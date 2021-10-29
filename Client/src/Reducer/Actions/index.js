import axios from "axios";

export const LOG_OUT = 'LOG_OUT'; 
export const LOG_IN = 'LOG_IN';
export const GET_MOVES = 'GET_MOVES';
export const POST_MOVES = 'POST_MOVES'

export const logIn = ({email, password}) => {
    return function(dispatch) {
      return axios(`http://localhost:3001/users/login?email=${email}&password=${password}`)
        .then(response => {
          console.log(response)
          dispatch({ type: LOG_IN, payload: response.data });
        })
        .catch(error => console.log(error));
    };
  }; 

export const getMoves = (idUser) => {
    return function(dispatch) {
      return axios(`http://localhost:3001/users/moves?idUser=${idUser}`)
        .then(response => {
          console.log(response)
          dispatch({ type: GET_MOVES, payload: response.data });
        })
        .catch(error => console.log(error));
    };
  }; 

export const postMoves = ({ name , mount , date  } , title , idUser) => {
    return function (dispatch) {  
      let type = title
      return axios.post('http://localhost:3001/users/moves',
      { name, mount, date , type , idUser})
      .then(r => {
          console.log(r);
          dispatch({ type: POST_MOVES , payload: r.data});
      })
      .catch(error => console.log(error));
}
} 

