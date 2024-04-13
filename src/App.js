import logo from './logo.svg';
import Heder from './Heder';
import Cart from './Cart';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Demo from './Demo';
import PuzzleGame from './generateRandomNumbers ';
import { useRef, useState } from 'react';
function App() {
  return (
    <div className="App">
      <Router> 
        <Heder />
        <Switch>
          <Route path="/" exact>
            <Demo />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <PuzzleGame /> */}
    </div>
  );
}

export default App;