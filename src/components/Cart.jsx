import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import ProductBuy from "./ProductBuy"
import Loader from './Loader';

export default function Cart() {

    const userContext = useContext(UserContext);
  return (
    <div  style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        {
            userContext && userContext.user && userContext.user.cart ? 
            userContext.user.cart.map((product)=>{
                return <ProductBuy details={product}/>
            }) : <Loader />
        }   
    </div>
  )
}
