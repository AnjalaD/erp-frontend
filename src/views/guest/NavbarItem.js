import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { COLOURS } from '../../constants/constants' 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    navbutton: {
        backgroundColor: COLOURS.secondary.dark,
        margin: 5
    }
}));

const NavbarItem = (props) => {
    const classes = useStyles();
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <Button className={classes.navbutton}>
                    <NavLink color = "dark" href={props.link}>{props.name}</NavLink>
                </Button>
            </NavItem>
        </Nav>
    );
}

export default NavbarItem;

