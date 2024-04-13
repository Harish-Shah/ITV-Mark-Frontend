import { createContext, useContext, useState } from "react";
import UserContext from "./UserContext";

// 1. create a context
export let CartContext = createContext();

export let CartProvider = (props) => {

    const[products, setProducts] = useState([]);

    return(
        <CartContext.Provider value={{products, setProducts}}>
            {props.children}
        </CartContext.Provider>
    )
} 

export default CartContext;