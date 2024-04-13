import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from "axios";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import UserContext from '../contexts/UserContext';
 
function Login() {

  const userContext = useContext(UserContext);

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login() {

    try {
      let response = await axios.post("http://localhost:9000/user/login", {
        id: email,
        password: password
      })
      // console.log(response.data)
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("id",response.data.id);
      // localStorage.setItem("username", response.data.username);
      // localStorage.setItem("role", response.data.role);
      userContext.setUser(response.data);
      console.log(userContext.user);
      toast("User logged in")
      navigate("/products");
    //  window.location.href="http://localhost:5173/products"
    } catch(error) {
      toast("Invalid credentials")
    }
  }

  return (

    <div style={{display:"flex",justifyContent:"center", margin:"10%"}}>

      <Card style={{ padding: "3%", width: "40%" }}>
        <center><Card.Title>Login</Card.Title></center>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" value={email} onChange={(event)=>{
              setEmail(event.target.value);
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" value={password} onChange={(event)=>{
              setPassword(event.target.value);
            }}/>
          </Form.Group>

          <Button variant="warning" type="submit" style={{width:"100%"}} onClick={(event)=>{
            event.preventDefault()
            login()
          }}>
            Submit
          </Button>
          <p style={{marginTop:"4%"}}>Dont have an account? <Link to="/register" style={{color:"blue"}}>Singup here</Link></p>
        </Form>
      </Card>

    </div>
  );
}

export default Login;