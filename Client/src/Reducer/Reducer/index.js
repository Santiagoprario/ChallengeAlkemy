import { LOG_OUT, LOG_IN , GET_MOVES, POST_MOVES} from '../Actions/index';

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
      window.localStorage.removeItem("isAuth");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("idUser");
          return {
            ...state,
            isAuth: false,
            user: null,
            id: null,
            isAdmin: false,
            status: ""
      };
      case GET_MOVES:
          return {
              ...state,
              moves: payload.moves,
          };
      case POST_MOVES:
          return state;    
      default:
          return state;
  };
};

export default Reducer;
