import logo from "./logo.svg";
import Heder from "./Heder";
import Cart from "./Cart";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Demo from "./Demo";
import { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
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
      
      <ToastContainer
        position="top-center"
        autoClose={1996}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
    </div>
  );
}

export default App;
