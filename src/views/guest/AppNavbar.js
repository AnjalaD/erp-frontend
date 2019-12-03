import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarItem from './NavbarItem';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Container,Nav,NavItem} from 'reactstrap';
import { COMPANY_NAME } from '../../constants/constants';
import { makeStyles } from '@material-ui/core/styles';
import { COLOURS } from '../../constants/constants'
const primary = COLOURS.secondary.light;
const useStyles = makeStyles(theme => ({
    topic: {
        //fontFamily:Monserrat
    },
}));

export default function AppNavbar() {

    const [isOpen, toggleNavbar] = useState(false);
    const classes = useStyles();
    return (
        <div>
            <Navbar style={{backgroundColor : primary}}dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/" className={classes.topic}>{COMPANY_NAME}</NavbarBrand>
                    <NavbarToggler onClick={e => toggleNavbar(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar >
                        <span className="nav navbar-nav navbar-right">
                            <NavbarItem name = "View Details" link = "/error"  />
                            <NavbarItem name="Apply Leave" link="http://facebook.com"  />
                        </span>
                        <Nav>

                        </Nav>
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
