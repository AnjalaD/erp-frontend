import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';



const NavbarItem = (props) => {

    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <Button color={props.bcol} >
                    <NavLink color = "dark" href={props.link}>{props.name}</NavLink>
                </Button>
            </NavItem>
        </Nav>
    );
}

export default NavbarItem;

