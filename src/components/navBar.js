import CartWidget from "./cartWidget";
import {Navbar, Container, Nav , NavDropdown} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand ><Link to='/'> <img src="/assets/armchair_sofa_furniture_seat_icon_209761.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>Simply</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
                <NavLink style={{paddingLeft: 20}} to='/' 
                    className={({ isActive })=> isActive ? 'clase1' : 'clase1' 
                }  >Inicio</NavLink>
                <NavLink style={{paddingLeft: 20}} to="/categoria/comedor">Comedor</NavLink>                                                            
                <NavLink style={{paddingLeft: 20}} to="/categoria/living">Living</NavLink>                    
        
            </Navbar.Collapse>
            <Link to='/cart'>
               
                <CartWidget />
            </Link>
        </Container>
    </Navbar>
</>
  );
}

