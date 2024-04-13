import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard';
import Loader from './Loader';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"

export default function Products() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  useEffect(()=>{
    getProducts(page, limit)
  },[page])

  async function getProducts(page, limit) {
    setIsLoading(true);
    try {
      let response = await axios.get(`http://localhost:9000/products?page=${page}&limit=${limit}`);
      setProducts(response.data);
    } catch(error) {
      toast("Soething went wrong! please try again later");
      navigate("/home");
    }

    setIsLoading(false);
  }

  return (

    isLoading==false ?

    <div>
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        {
          products.map((product)=>{
            return(
              <ProductCard key={product.id} details={product} />
            )
          })
        }
      </div>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <Button style={{ margin:"0.5rem", width:"100%"}} onClick={()=>{
          if(page>1) {
            setPage(page-1);
          }
        }}>{"<"}Previous</Button>
        <Button style={{ margin:"0.5rem", width:"100%"}} onClick={()=>{
          setPage(page+1);
        }}>Next{">"}</Button>
      </div>
    </div>
    :
      <Loader /> 

  )
}
