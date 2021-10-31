import { LOG_OUT, LOG_IN , GET_MOVES, POST_MOVES , UPDATE_MOVES} from '../Actions/index';

const INITIAL_STATE = {
  isAuth: false,
  name: '',
  id: '',
  moves: []
};

const Reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      if (payload.login) {
        window.localStorage.clear();
        window.localStorage.setItem("isAuth" , payload.login)
        window.localStorage.setItem('idUser', payload.id);
        window.localStorage.setItem('name' , payload.username)
        return {
          ...state,
          isAuth: payload.login,
          name: payload.username,
          id: payload.id,
          moves: payload.moves,
        };
      } else {
        const newState = {
          ...state,
          isAuth: false,
          message: payload.message,
        };
        return newState
      };
    case LOG_OUT:
      window.localStorage.clear();
      window.localStorage.removeItem('isAuth');
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('idUser');
          return {
            ...state,
            isAuth: false,
            name: null,
            id: null,
      };
      case GET_MOVES:
          return {
              ...state,
              moves: payload.Moves,
          };
      case POST_MOVES:
              return {
                ...state,
          isAuth: payload.login,
          name: payload.username,
          idUser: payload.id,
          moves: payload.Moves,
            };  
      default:
          return state;
  };
};

export default Reducer;
