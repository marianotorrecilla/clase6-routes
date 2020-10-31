import {Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
           <Nav className="justify-content-center" activeKey="/" >
               <Nav.Item>
                   <NavLink to="/" exact activeStyle={{ color: 'tomato'}} className="mr-1">
                       Home
                   </NavLink>
                </Nav.Item>
                <Nav.Item>
                   <NavLink to="/personajes" activeStyle={{ color: 'tomato'}} className="mr-1">
                       Personajes
                   </NavLink>
                </Nav.Item>
                <Nav.Item>
                   <NavLink to="/personajes/detalle" activeStyle={{ color: 'tomato'}} className="mr-1">
                       Detalle Personajes
                   </NavLink>
               </Nav.Item>

           </Nav>
        </>
    )
}

export default NavBar; 