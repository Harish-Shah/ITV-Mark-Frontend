import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './contexts/CartContext.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvider>
  <CartProvider>
      <App />
  </CartProvider>
  </UserProvider>
  // </React.StrictMode>,
)
