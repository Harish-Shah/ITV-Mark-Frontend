import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Register from "./components/Register"
import Products from "./components/Products"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import {ToastContainer} from "react-toastify"
import Cart from "./components/Cart"

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <ToastContainer />
      <Routes> 
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
