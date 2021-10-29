import { Route, Switch } from "react-router-dom";
import './App.css';
import Welcome from "./Components/Welcome";
import LogIn from "./Components/Login";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/form' component={Form} />
      </Switch>
    </div>
  );
}

export default App;
