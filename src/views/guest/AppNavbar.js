import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarItem from './NavbarItem';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Container,
    Nav,
    NavItem
} from 'reactstrap';



export default function AppNavbar() {

    const [isOpen, toggleNavbar] = useState(false);
    return (
        <div>
            <Navbar color= "dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Jupiter</NavbarBrand>
                    <NavbarToggler onClick={e => toggleNavbar(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar >
                        <span className="nav navbar-nav navbar-right">
                            <NavbarItem name = "View Details" link = "/error"  />
                            <NavbarItem name="Apply Leave" link="http://facebook.com"  />
                        </span>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <h5>My Name</h5>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
