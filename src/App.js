import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/commanCompo/Navbar";
import SignIn from "./page/SignIn";
import Register from "./page/Register";
import Home from "./page/Home";
import CartForm from "./page/CartForm";
import SignUp from "./page/SignUp";
import Cart from "./page/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CartCheckOut" element={<CartForm/>} />
      </Routes>
    </div>
  );
}

export default App;
