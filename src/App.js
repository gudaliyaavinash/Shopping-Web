import Heder from "./Heder";
import Cart from "./Cart";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Demo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <Heder />
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/details" element={<Home />} />
        </Routes>
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
