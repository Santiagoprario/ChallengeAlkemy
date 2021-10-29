import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from '../Reducer/index'

const composeEnhacer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducer,
  composeEnhacer(applyMiddleware(thunk))
);

export default store;