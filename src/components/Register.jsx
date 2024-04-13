import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default function Register() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [nameInvalid, setNameInvalid] = useState(false);
    const [surnameInvalid, setSurnameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    const navigate = useNavigate();

    async function registerUser(event) {
      event.preventDefault();
      if(name!="" && nameInvalid===false && email!="" && emailInvalid===false && phone!="" && phoneInvalid===false && password!=="" && passwordInvalid===false) {
        try {
          let response = await axios.post("http://localhost:9000/user/register", {
           id: email,
           name: name,
           password: password,
           phone: phone,
           role: "USER" 
          })
          console.log(response.data);
          toast("User registered");
          navigate("/login");
        } catch(error) {
          toast("Something went wrong");
        } 
      } else {
          toast("Details are invalid");
      }
    }

    function validate(event) {
        if(event.target.name==="name") {
            if(event.target.value.trim().length<2) {
                setNameInvalid(true);
                setName(event.target.value.trim());
            } else {
                setNameInvalid(false);
                setName(event.target.value.trim());
            }
        }

        if(event.target.name==="surname" ) {
            if(event.target.value.trim().length<3) {
                setSurnameInvalid(true);
                setSurname(event.target.value);
            } else {
                setSurnameInvalid(false);
                setSurname(event.target.value);
            }
        }

        if(event.target.name==="email") {
            const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(emailPattern.test(event.target.value)) {
                setEmailInvalid(false);
                setEmail(event.target.value);   
            } else {
                setEmailInvalid(true);
                setEmail(event.target.value);  
            }
        } 

        if(event.target.name==="phone") {
            let phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(phonePattern.test(event.target.value)) {
                setPhoneInvalid(false);
                setPhone(event.target.value);
            } else {
                setPhoneInvalid(true);
                setPhone(event.target.value);
            }
        }

        if(event.target.name==="password") {
            if(event.target.value.trim().length<5) {
                setPasswordInvalid(true);
                setPassword(event.target.value.trim());
            } else {
                setPasswordInvalid(false);
                setPassword(event.target.value.trim());   
            }
         }

    }
 
    return(
        <div style={{marginLeft:"10%", marginRight:"10%", marginTop:"2%"}}>
        
        <Card style={{padding:"2%"}}>
          <center><Card.Title>Signup</Card.Title></center>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name}  name="name" placeholder="Enter name" onChange={(event)=>{
                    validate(event);
                }} />
            </Form.Group>

            { nameInvalid ? <p style={{color:"red"}}>Name is too short!</p> : null }

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" value={email} placeholder="Enter email" onChange={(event)=>{
                    validate(event);
                }}/>
            </Form.Group>

            { emailInvalid ? <p style={{color:"red"}}>Email is invalid!</p> : null }

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={phone} placeholder="Enter phone number" onChange={(event)=>{
                    validate(event);
                }} />
            </Form.Group>

            { phoneInvalid ? <p style={{color:"red"}}>Phone number is invalid!</p> : null }

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter password" onChange={(event)=>{
                    validate(event);
                }}/>
            </Form.Group>

            { passwordInvalid ? <p style={{color:"red"}}>Password is invalid!</p> : null }

            <Button variant="warning" style={{width:"100%"}} type="submit" onClick={(event)=>{
                registerUser(event);
            }}>
                Submit
            </Button>
        </Form>
        </Card>

        </div>
        
    )
}