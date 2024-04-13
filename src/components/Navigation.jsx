import { CartPlus, Person } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';

function Navigation() {

    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    console.log(userContext)
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">ITV-mart</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>

                        {
                            localStorage.getItem("token") ? <Nav.Link onClick={() => {
                                localStorage.clear();
                                window.location.href = "http://localhost:5173/"
                            }}>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>

                    <div className="d-flex">
                        <CartPlus size="30" color="white" onClick={()=>{
                            navigate("/cart")
                        }}/>
                    </div>
                    <Badge bg="warning" style={{ marginRight: "2%" }}>{userContext.user && userContext.user.cart  && userContext.user.cart.length > 0 ? userContext.user.cart.length : cartContext.products.length}</Badge>
                    {
                        localStorage.getItem("token") && userContext.user != undefined ?
                            <>
                                <Person size="30" color="white" />
                                <p style={{ color: "white" }}>{userContext.user.id}</p>
                            </> : null
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;