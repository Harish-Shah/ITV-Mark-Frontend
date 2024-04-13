import React, { useContext } from 'react'
import {Card, ListGroup, Button} from "react-bootstrap"
import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';
import Products from './Products';

export default function ProductCard(props) {

    const details = props.details;

    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);

  return (
    <Card style={{ width: '18rem', margin:"0.5rem" }}>
    <div style={{display:"flex", justifyContent:"center"}}>
        <Card.Img variant="top" src={details.image} style={{height:"10rem", width:"8rem", padding:"5%"}}/>
    </div>
    <Card.Body>
      <Card.Title>{details.title}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Category: {details.category}</ListGroup.Item>
      <ListGroup.Item>Price: ${details.price}</ListGroup.Item>
      <ListGroup.Item>

        {
          localStorage.getItem("role")=="ADMIN" ? 
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <Button variant='warning' style={{width:"49%"}}>Edit</Button>
            <Button variant='warning' style={{width:"49%"}}>Delete</Button>
          </div> : 
          <Button variant='warning' style={{width:"100%"}} onClick={()=>{
            // cartContext.setProducts([...cartContext.products, details])
            userContext.updateUser({
              id:userContext.user.id,
              username:userContext.user.username,
              cart:[...userContext.user.cart, details],
              Products:userContext.user.products,
              phone:userContext.user.phone
            })

          }}>Add to cart</Button>
        }

      
      </ListGroup.Item>
    </ListGroup>
  </Card>
  )
}
